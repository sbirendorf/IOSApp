define(["app"], function (SpartaMain) {
    SpartaMain.module("Mobile", function (Mobile, SpartaMain, Backbone, Marionette, $, _) {
        Mobile.Router = Marionette.AppRouter.extend({
            appRoutes: {
                "home": 'mobilePage',
                "login": 'loginPage',
                "logout": 'logout',
                "charts": 'chartPage',
                "scan": 'scanPage',
                "balance": 'balancePage',
                "landing": 'landingPage',
                "profile/edit/:id": 'profileEditPage'
            }
        });

        var API = {
            mobilePage: function () {
                 require(["apps/mobile/main_page_controller"], function (Controller) {
                    Controller.mobileMainPage();
                });
            },
            chartPage: function () {
                 require(["apps/mobile/main_page_controller"], function (Controller) {
                    Controller.mobileChartPage();
                });
            },
            scanPage: function () {
                 require(["apps/forceplate/scan/scan_controller"], function (Controller) {
                    Controller.mobileScanPage();
                });
            },
            balancePage: function () {
                 require(["apps/forceplate/balance/balance_controller"], function (Controller) {
                    Controller.mobileBalancePage();
                });
            },
            landingPage: function () {
                 require(["apps/forceplate/landing/landing_controller"], function (Controller) {
                    Controller.mobileLandingPage();
                });
            },
            profileEditPage: function (id) {
                 require(["apps/mobile/profile_page_controller"], function (Controller) {
                    Controller.profileEditPage(id);
                });
            },
            loginPage: function () {
                 require(["apps/mobile/main_page_controller"], function (Controller) {
                    Controller.loginPage();
                    SpartaMain.navigate('');
                });
            },
            logout: function () {
                 window.localStorage.removeItem("sparta_key");
                 window.localStorage.removeItem("sparta_header");
                API.loginPage();
            }
        };
         Mobile.on("mobile:start", function () {
            require(["apps/mobile/main_page_controller"], function (Controller) {
                    Controller.mobileMainPage();
                //    SpartaMain.navigate('home');
                });
        });
        Mobile.on("mobile:login", function () {
                 API.loginPage();
        });
        Mobile.on("start", function () {
            SpartaMain.navigate('home');
            new Mobile.Router({
                controller: API
            });
        });
        
    });
    return SpartaMain.Mobile;
});
 
