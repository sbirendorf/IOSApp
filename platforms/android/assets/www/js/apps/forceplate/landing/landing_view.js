define(["app",
    "tpl!apps/forceplate/templates/landing.tpl",
    "backbone.syphon"],
        function (SpartaMain, LandingTpl) {
            SpartaMain.module("Forceplate.Landing", function (Landing, SpartaMain, Backbone, Marionette, $, _) {
                Landing.LandingPage = Marionette.ItemView.extend({
                    className: 'balance-page',
                    templateHelpers: function () {
                        var data = this.model.attributes.data;
                        return {total_lower: data.scans
                           };
                    },
                    template: LandingTpl,
                    onShow: function (){
                        var lineLowDates =[];
                        var lineLowLeft =[];
                        var lineLowRight =[];
                        var data = this.model.attributes.data;  
                        for(var c=0; c<data.scans.length; c++){
                            lineLowDates[c]=data.scans[c].date;
                            lineLowLeft[c]=data.scans[c].left;
                            lineLowRight[c]=data.scans[c].right;
                            var barData = {
                                labels: [data.scans[c].date],
                                datasets: [
                                    {
                                        fillColor: '#9C9192',
                                        data: [data.scans[c].left]
                                    },
                                    {
                                        fillColor: '#000',
                                        data: [data.scans[c].right]
                                    }
                                ]
                            };
                            var context = document.getElementById('LowbarChart'+c).getContext('2d');
                            var clientsChart = new Chart(context).Bar(barData);
                        }
                    var lineChartData = {
                        labels: lineLowDates,
                        datasets: [{
                            strokeColor: '#9C9192',
                            pointColor: '#9C9192',
                            fillColor: "rgba(220,220,220,0.01)",
                            data: lineLowLeft
                        }, {
                            strokeColor: '#000',
                            pointColor: "#000",
                            fillColor: "rgba(220,220,220,0.01)",
                            data: lineLowRight
                        },
                        ]

                    };

                    var ctx = document.getElementById("canvas").getContext("2d");
                    var LineChartDemo = new Chart(ctx).Line(lineChartData, {
                        pointDotRadius: 3,
                        bezierCurve: false,
                        scaleShowVerticalLines: false,
                        backgroundColor: "#fff",
                        scaleGridLineColor: "black"
                    });  
                    }
                });
            });
            return SpartaMain.Forceplate.Landing;
        });