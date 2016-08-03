define(["app",
    "tpl!apps/mobile/templates/home_page_layout.tpl",
    "tpl!apps/mobile/templates/activity_list.tpl",
    "tpl!apps/mobile/templates/left_menu.tpl",
    "tpl!apps/mobile/templates/charts.tpl",
    "tpl!apps/mobile/templates/login.tpl",
    "tpl!apps/mobile/templates/footer.tpl",
    "backbone.syphon"],
        function (SpartaMain,HomePageLayoutTpl, LandingPageTpl, LeftMenuTpl,ChartsTpl,LoginTpl,FooterTpl) {
            SpartaMain.module("MobileHome.Main", function (Main, SpartaMain, Backbone, Marionette, $, _) {
                
                Main.HomePageLayout = Marionette.LayoutView.extend({
                    template: HomePageLayoutTpl,
                    regions: {
                        nameRegion: "#name-region",
                        actRegion: "#act-region"
                    }
                });
                Main.LandingPage = Marionette.ItemView.extend({
                    template: LandingPageTpl,
                    templateHelpers: function () {
                        return {list: this.model.attributes};
                    },
                });
                Main.LeftMenu = Marionette.ItemView.extend({
                    template: LeftMenuTpl,
                    templateHelpers: function () {
                        localStorage.sparta_url+"/"+this.model.attributes.img
                        if(this.model.attributes.img ==""){
                             return {img: "./img/anon_user.png"};
                        }
                        return {img: localStorage.sparta_url+"/"+this.model.attributes.img};
                    },
                });
                // Main.Footer = Marionette.ItemView.extend({
                //     template: FooterTpl
                // });
                Main.LogInPage = Marionette.ItemView.extend({
                    template: LoginTpl,
                    events: {
                        "click .sp-login": "login"
                    },
                    login: function (e) {
                        e.stopPropagation();
                        e.preventDefault();
                        $('.login-form').hide();
                        var data = Backbone.Syphon.serialize(this);
                        require(["entities/login"], function (Controller) {
                            SpartaMain.request("login", data);
                        });
                        
                    }
                });
                Main.ChartsPage = Marionette.ItemView.extend({
                    template: ChartsTpl,
                    templateHelpers: function () {
                        return {total: this.model.attributes};
                    },
                    onShow: function () {
                        var dataset =this.model.attributes;
                        $.each( dataset, function( key, value ) {
                            console.log(value);
                            var chartData = [];
                            var chartDates = [];
                                $.each( value.data, function(k,val ) {
                                    chartData.push(val.fact_value);
                                    chartDates.push(val.fact_event_date.substring(5, 10));
                                });
                                 $.each( value.data, function(k,val ) {
                                    chartData.push(val.fact_value);
                                    chartDates.push(val.fact_event_date.substring(5, 10));
                                });
                                  $.each( value.data, function(k,val ) {
                                    chartData.push(val.fact_value);
                                    chartDates.push(val.fact_event_date.substring(5, 10));
                                });
                                   var lineChartData = {
                                          labels: chartDates,
                                          datasets: [{
                                            label: "My First dataset",
                                            fillColor: "rgba(100, 181, 246, 0.5)",
                                            strokeColor: "#90caf9",
                                            pointColor: "transparent",
                                            pointStrokeColor: "rgba(41, 128, 185, 0)",
                                            pointHighlightFill: "rgba(41, 128, 185, 0.9)",
                                            pointHighlightStroke: "rgba(41, 128, 185, 0)",
                                            data: chartData
                                          }]
                                        };

                                setTimeout(
                                  function() 
                                  {
                                      var ctx = document.getElementById("canvas"+key).getContext("2d");
                                        window.myLine = new Chart(ctx).Line(lineChartData, {
                                            responsive: true,
                                          });
                                  },
                                500);
                        });//end of foreach
                        
                    }
                });
            });
            return SpartaMain.MobileHome.Main;
        });
