define(["app",
    "tpl!apps/workouts/templates/workout_view_only.tpl",
    "backbone.syphon"],
        function (SpartaMain, FormTpl) {
            SpartaMain.module("Workout.ViewPage", function (ViewPage, SpartaMain, Backbone, Marionette, $, _) {
                ViewPage.FormPage = Marionette.ItemView.extend({
                    className: 'item',
                    template: FormTpl,
                     onShow: function () {
                        function close_accordion_section() {
                            $('.accordion .accordion-section-title').removeClass('active');
                            $('.accordion .accordion-section-content').slideUp(300).removeClass('open');
                        }

                        $('.accordion-section-title').click(function (e) {
                            // Grab current anchor value
                            var currentAttrValue = $(this).attr('href');
                            if ($(e.target).is('.active')) {
                                close_accordion_section();
                            } else {
                                close_accordion_section();

                                // Add active class to section title
                                $(this).addClass('active');
                                // Open up the hidden content panel
                                $('.accordion ' + currentAttrValue).slideDown(300).addClass('open');
                            }

                            e.preventDefault();
                        });
                        close_accordion_section();
                    }
                });
            });
            return SpartaMain.Workout.ViewPage;
        });
 