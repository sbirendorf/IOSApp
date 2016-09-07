define(["app",
    "tpl!apps/notifications/templates/notifications.tpl",
    "backbone.syphon"],
        function (SpartaMain, NotificationsTpl) {
            SpartaMain.module("Notifications", function (Notifications, SpartaMain, Backbone, Marionette, $, _) {
                
                Notifications.notificationsPageView = Marionette.ItemView.extend({
                    template: NotificationsTpl,
                    templateHelpers: function () {
                        return { update:localStorage.sparta_notification};
                    },
                    events: {
                        "click .ion-android-close":"closeNotification",
                        "change #update":"notificationTimeChange"
                    },
                    notificationTimeChange: function(e){
                        e.stopPropagation();
                        e.preventDefault();
                        var selected = $('#update').val();
                        window.localStorage.setItem("sparta_notification", selected);
                    },
                    closeNotification: function(e){
                        e.stopPropagation();
                        e.preventDefault();
                        $(e.target).parent().parent().remove();
                        var data = {nid:[$(e.target)[0].id], status:"read"};
                        SpartaMain.request("common:postData","api/note_mark_read", data);
                    } 
                });
            });
            return SpartaMain.Notifications;
        });
