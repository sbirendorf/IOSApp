define(["app",
    "tpl!apps/workouts/templates/workout_list_tabs.tpl",
    "tpl!apps/workouts/templates/workout_list_item.tpl",
    "tpl!apps/workouts/templates/workouts_list_header.tpl",
    "backbone.syphon"],
        function (SpartaMain,WorkoutsTabsTpl, WorkoutItemTpl,WorkoutHeadTpl) {
            SpartaMain.module("Workout.List", function (List, SpartaMain, Backbone, Marionette, $, _) {
                List.WorkoutsListTabs = Marionette.ItemView.extend({
                    className: 'workout_tabs_list',
                    template: WorkoutsTabsTpl,
                    events: {
                        "click .wo-activate": "WorkoutActivate"
                    },
                    WorkoutActivate: function (e) {
                        e.stopPropagation();
                        e.preventDefault();
                        require(["apps/workouts/list/workout_list_controller"], function (workouts) {
                            workouts.WorkoutsActivate($(".wo-activate")[0].id);
                        });
                    }
                });
               List.WorkoutsListItem = Marionette.ItemView.extend({
                    className: 'workout_item',
                    template: WorkoutItemTpl,
                    tagName: "tr"
                    
                });

                List.WorkoutsList = Marionette.CompositeView.extend({
                    template: WorkoutHeadTpl,
                    tagName: "table",
                    className: "table table-hover striped workouts-list",
                    childViewContainer: "tbody",
                    childView: List.WorkoutsListItem
                });
            });
            return SpartaMain.Workout.List;
        });
 