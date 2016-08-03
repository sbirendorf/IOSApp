define(["app",
    "entities/common",
    "common/common_view"],
        function (SpartaMain, Model, CommonView) {
            SpartaMain.module("Workout.Common", function (Common, SpartaMain, Backbone, Marionette, $, _) {
                Common.Controller = {
                    createWorkout: function (data) {
                        var load = new CommonView.Loading();
                        SpartaMain.MainRegion.show(load);

                        var fetchingData = SpartaMain.request("common:postData","api/create_workout", data);
                        fetchingData.done(function (Data) {
                            // check for form validation
                                var msg = new CommonView.Messages({model: Data});
                                                              
                                 require(["apps/workouts/list/workout_list_controller"], function (Controller) {
                                    Controller.WorkoutsList();
                                    SpartaMain.navigate('workouts', '');
                                });
                                var load = new CommonView.Loading();
                                SpartaMain.MainRegion.show(load);
                                SpartaMain.MessageRegion.show(msg);   
                            
                        });
                        fetchingData.fail(function (err) {
                            var error = new CommonView.ServerError({
                                error: err
                            });
                            SpartaMain.MainRegion.show(error);
                        });
                    }
                    
                };

            });
            return SpartaMain.Workout.Common.Controller;
        });