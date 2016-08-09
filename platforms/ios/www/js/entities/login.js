define(["app"], function(SpartaMain){
SpartaMain.module("Init", function(Init, SpartaMain, Backbone, Marionette, $, _) {

    Init.Item = Backbone.Model.extend({  
    });
    var API = {
            postLoginData: function (data) {
                var http = new XMLHttpRequest();
                var params = "name="+ data.user + "&pass=" + data.pw;
            
              //  data.url="localhost/misparta/www";
             //   data.url="dev1.spartatrac.com";
                http.open("POST", "https://"+data.url+"/api/login", true);
                //Send the proper header information along with the request
                http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                http.onreadystatechange = function() {//Call a function when the state changes.
                  if(http.readyState ==4){//request finished and response is ready
                  var obj = jQuery.parseJSON(http.responseText);
                        if (http.responseText.indexOf("sessionId") >= 0){
                            window.localStorage.setItem("sparta_url", "https://"+data.url);
                            window.localStorage.setItem("sparta_key", obj.sessionId);
                            API.siteHeader(data.url);//get the cookie header
                        }else{
                            alert(obj.error.descr);
                            $('.login-form').show();
                        }
                  }
                };
                http.send(params);
            },
             siteHeader: function (url) {
                var ajax = $.ajax({
                   url: "https://"+url+"/api/login/android",
                   type: 'GET'
               });
               ajax.done(function (Data) {
                   window.localStorage.setItem("sparta_header", Data.sessionKey);
                   require(["apps/mobile/mobile_router"], function (mobile) { 
                              mobile.trigger("mobile:start");
                    });
               });
               ajax.fail(function(jqXHR, textStatus, errorThrown) {
                    $('.login-form').show();
                    alert(errorThrown);
              });
             }
    };
    SpartaMain.reqres.setHandler("login", function(data) {
        return API.postLoginData(data);
    });

});
return ;
});