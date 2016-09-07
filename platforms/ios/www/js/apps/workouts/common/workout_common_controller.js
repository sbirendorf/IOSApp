define(["app",
    "entities/common",
    "common/common_view"],
        function (SpartaMain, Model, CommonView) {
            SpartaMain.module("Workout.Common", function (Common, SpartaMain, Backbone, Marionette, $, _) {
                Common.Controller = {
                    createWorkout: function (data,type) {
                        if(type == 'finished'){
                            var load = new CommonView.LoadingModal();
                            SpartaMain.DialogRegion.show(load);
                        }
                        var fetchingData = SpartaMain.request("common:postData","api/create_workout", data);
                        fetchingData.done(function (Data) {
                                var msg = new CommonView.Messages({model: Data});
                                //only redirect if finished, on save just save the workout
                                if(type == 'finished'){                            
                                    require(["apps/workouts/list/workout_list_controller"], function (Controller) {
                                        Controller.WorkoutsList();
                                        SpartaMain.navigate('workouts', '');
                                    });
                                    var load = new CommonView.Loading();
                                    SpartaMain.MainRegion.show(load);
                                    SpartaMain.DialogRegion.empty();
                                }
                                SpartaMain.MessageRegion.show(msg);   
                            
                        });
                        fetchingData.fail(function (err) {
                            var error = new CommonView.ServerError({
                                error: err
                            });
                            SpartaMain.DialogRegion.empty();
                            SpartaMain.MessageRegion.show(error);
                        });
                    }
                    
                };

            });
            return SpartaMain.Workout.Common.Controller;
        });