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
      require(["apps/health/health_router"], function (health) {health.start();});
      require(["apps/workouts/workouts_router"], function (workouts) {workouts.start();});
      require(["apps/mobile/mobile_router"], function (mobile) { 
        SpartaMain.str();
        mobile.start(); 
        mobile.trigger("mobile:start");
      });
    });
return SpartaMain;
 });
