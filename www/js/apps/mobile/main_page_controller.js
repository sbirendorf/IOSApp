define(["app",
    "apps/mobile/main_page_view",
    "common/common_view",
    "entities/common",
    "apps/mobile/profile_page_view"],
    function (SpartaMain, View, Common, Model,ProfileView) {
        SpartaMain.module("MobileHome.Main", function (Main, SpartaMain, Backbone, Marionette, $, _) {
            Main.Controller = {
                mobileMainPage: function () {
                    $(".open-left").css("display", "none");
                    require(["entities/common"], function () {
                        SpartaMain.getUser(true);    

                        var homePage = new Main.HomePageLayout({});
                        SpartaMain.MainRegion.show(homePage);
                        var rm = new Marionette.RegionManager(homePage);
                        var regions = rm.getRegions();
                        var fetchingData = SpartaMain.request("common:getModal", "get_all_athlete_information");
                        fetchingData.done(function (Data) {
                            $(".open-left").css("display", "block");
                            var menu = new Main.LeftMenu({
                                model: Data
                            });
                            SpartaMain.MenuRegion.show(menu);
                            
                            var athleteInfo = new ProfileView.AthleteProfilePage({
                                model: Data
                            });
                            regions.nameRegion.show(athleteInfo);    
                            
                        });

                        //get the activity list 
                        
                        var load = new Common.Loading();
                        regions.actRegion.show(load);

                        var fetchingData = SpartaMain.request("common:getModal", "get_athlete_activities");
                        fetchingData.done(function (Data) {
                            var list = new Main.LandingPage({
                                model: Data
                            });
                            regions.actRegion.show(list);
                        });
                    });
                },
                mobileChartPage: function () {
                    var load = new Common.Loading();
                    SpartaMain.MainRegion.show(load);
                    
                    var fetchingData = SpartaMain.request("common:getModal", "get_all_fact_athlete_home");
                    fetchingData.done(function (Data) {

                        var page = new Main.ChartsPage({
                            model: Data
                        });
                        SpartaMain.MainRegion.show(page);
                    }); 
                },
                loginPage: function () {
                    SpartaMain.MenuRegion.empty();
                    $(".open-left").css("display", "none");
                    var page = new Main.LogInPage({});
                    SpartaMain.MainRegion.show(page);
                }
            };
        });
        return SpartaMain.MobileHome.Main.Controller;
    });
