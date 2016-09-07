define(["marionette"], function(Marionette,bootstrapJs){
    var SpartaMain = new Marionette.Application();
   
    SpartaMain.addRegions({
       MainRegion: "#main-region", 
       MenuRegion: "#slide-out-left", 
       MessageRegion: "#message-region",
  //     FooterRegion: "#footer-region", 
       DialogRegion: "#dialog-region"
     
    });
    SpartaMain.navigate = function(route,  options){
        options || (options = {});
        Backbone.history.navigate(route, options);
      };
    SpartaMain.getUser = function(sid){
         if(sid =='Forbidden' || localStorage.sparta_url ==undefined){
            require(["apps/mobile/mobile_router"], function (mobile) {
                mobile.trigger("mobile:login");
                window.localStorage.removeItem("sparta_key");
                window.localStorage.removeItem("sparta_header");
            });
         }

    };
    SpartaMain.getCurrentRoute = function(){
        return Backbone.history.fragment;
      };
    SpartaMain.str = function(){
         Backbone.history.start(); 
      };  
    SpartaMain.addInitializer( function(){  
       require(["apps/router"], function (Router) {
                  SpartaMain.str();
                  Router.start();

                  if(SpartaMain.getCurrentRoute() == ""){
                    Router.trigger("app:start");
                  }
      });
    });

    document.addEventListener('deviceready', function () {
      console.log('start');
                  // if(localStorage.sparta_notification ==undefined){
                  //   window.localStorage.setItem("sparta_notification", 6);
                  // }
                  // var updateTime = Number(localStorage.sparta_notification)*60;
                  // if(updateTime > 0 ){
                  //     cordova.plugins.notification.local.schedule({
                  //         id: 10,
                  //         every: 1, // every X minutes,
                  //         title: "SpartaTrac Installed"
                  //         //every: updateTime // every X minutes
                  //     });
                  // }else{
                  //     cordova.plugins.notification.local.cancel(10, function () {
                  //         // Notification was cancelled
                  //     }, this);
                  // }
                  // Notification has reached its trigger time
                  // cordova.plugins.notification.local.on("trigger", function (notification) {
                  //   console.log(notification);
                  //     if (notification.id != 10)
                  //         return; 
                  //       require(["entities/common"], function () {
                  //         var fetchingData = SpartaMain.request("common:getModal", "api/note_get_mobile_notification/"+localStorage.sparta_notification);
                  //         fetchingData.done(function (Data) {
                  //               if(Number(Data.attributes.number) == 0 ){
                  //                 console.log(0);
                  //                 cordova.plugins.notification.local.clear(10, function() {
                  //                 });
                  //               }else{
                  //                 console.log(Number(Data.attributes.number));
                  //                   cordova.plugins.notification.local.update({
                  //                       id: 10,
                  //                       title: Data.attributes.number+" New Notifications"
                  //                   });
                  //               }
                  //           });
                  //       });
                     
                  // });
              }, false);

return SpartaMain;
 });
