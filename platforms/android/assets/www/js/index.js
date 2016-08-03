/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

var WorkoutTimer= {
    timer: null,

    Start: function(className,target) {
         //change the row color
        var number = WorkoutTimer.GetComplex(target); 
        WorkoutTimer.ChangeRowColor(number);

        this.timer = setInterval(function() {

            var timer = $('.'+className+number).html();
            timer = timer.split(':');
            var minutes = parseInt(timer[0], 10);
            var seconds = parseInt(timer[1], 10);
            if(isNaN(minutes) || isNaN(seconds)){
                return;
            }
            seconds -= 1;
            if (minutes < 0) return clearInterval(interval);
            if (minutes < 10 && minutes.length != 2) minutes = '0' + minutes;
            if (seconds < 0 && minutes != 0) {
                minutes -= 1;
                seconds = 59;
            }
            else if (seconds < 10 && length.seconds != 2) seconds = '0' + seconds;
            $('.'+className+number).html(minutes + ':' + seconds);

            if (minutes == 0 && seconds == 0){
                WorkoutTimer.Stop();
                navigator.vibrate(1000);
                WorkoutTimer.Reset('the-clock-',target);
                WorkoutTimer.IncreaseSet(number);
            }

        }, 1000);
    },
    Stop: function() {
        window.clearTimeout(this.timer);
    },
    Reset: function(className,target) {
        var number = WorkoutTimer.GetComplex(target); 
        $("."+className+number).text($(".org-"+className+number)[0].innerText);
    },
    GetComplex: function(target) {
        var complexNumber = $(target).closest(".accordion-section-content");
            complexNumber = complexNumber[0].id.replace(/\s/g, '');
        var number = complexNumber.replace(/[^0-9]/g, ''); 
        return number;
    },
    ChangeRowColor: function(number) {
        var currentSetNum = $("#accordion-"+number +" .set-number").text();
        $("#accordion-"+number +" .inner-set-number-"+currentSetNum).addClass( "active-set" );
    },
     IncreaseSet: function(number) {
        var currentSetNum = Number($("#accordion-"+number +" .set-number").text());
        $("#accordion-"+number +" .inner-set-number-"+currentSetNum).removeClass("active-set");
        $("#accordion-"+number +" .set-number").text(currentSetNum+1);
        
        WorkoutTimer.ChangeRowColor(number);


       
    }
};