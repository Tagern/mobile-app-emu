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

/* TOUCH SWIPE ACROSS PAGES */

$(document).on('swipeleft', '.ui-page', function(event){    
    if(event.handled !== true) // This will prevent event triggering more then once
    {    
        var nextpage = $.mobile.activePage.next('[data-role="page"]');
        // swipe using id of next page if exists
        if (nextpage.length > 0) {
            $.mobile.changePage(nextpage, {transition: "slide", reverse: false}, true, true);
        }
        event.handled = true;
    }
    return false;         
});

$(document).on('swiperight', '.ui-page', function(event){     
    if(event.handled !== true) // This will prevent event triggering more then once
    {      
        var prevpage = $(this).prev('[data-role="page"]');
        if (prevpage.length > 0) {
            $.mobile.changePage(prevpage, {transition: "slide", reverse: true}, true, true);
        }
        event.handled = true;
    }
    return false;            
});

/* END TOUCH SWIPE ACROSS PAGES END*/


/* ONCLICKS TO LINK TO THE RELEVANT PLAYLIST PAGE */

function angryPlaylist() {
    window.location.href = "angryPlaylist.html"
}

function happyPlaylist() {
    window.location.href = "happyPlaylist.html"
}
function serenityPlaylist() {
    window.location.href = "serenityPlaylist.html"
}
function sadnessPlaylist() {
    window.location.href = "sadnessPlaylist.html"
}
function lovePlaylist() {
    window.location.href = "lovePlaylist.html"
}

function homepage(){
    window.location.href = "index.html"
}
function angrypage(){
    window.location.href = "index.html#article2"
}
function joypage(){
    window.location.href = "index.html#article3"
}
function serenitypage(){
    window.location.href = "index.html#article4"
}
function sadnesspage(){
    window.location.href = "index.html#article5"
}
function lovepage(){
    window.location.href = "index.html#article6"
}

/* END END ONCLICKS TO LINK TO THE RELEVANT PLAYLIST PAGE END END*/

/* SHOWING INTERNET CONNECTION */

var internetOff = document.addEventListener("offline", offlineFunction, false);
var internetOn = document.addEventListener("online", onlineFunction, false);


function offlineFunction() {
    document.getElementById('main-container').style.display="none";
    document.getElementById('offline-text').style.display="block";

}

function onlineFunction() {
    document.getElementById('main-container').style.display="block";
    document.getElementById('offline-text').style.display="none";
}

/* Delayed gif image */

setTimeout(function(){
    document.getElementById('swipe-left').style.visibility="visible";
}, 3500);


/* CACHING IMAGES */
  window.onload=function(){

    ImgCache.options.debug = true;
    ImgCache.options.chromeQuota = 50*1024*1024;

    ImgCache.init(function () {
        console.log('ImgCache init: success!');

        // from within this function you're now able to call other ImgCache methods
        // or you can wait for the ImgCacheReady event


        var target = $('img');
          ImgCache.cacheFile(target.attr('src'), function () {
            ImgCache.useCachedFile(target, function () {
              console.log('now using local copy');
            }, function(){
              console.log('could not load from cache');
            })
          });

          ImgCache.isCached(target.attr('src'), function(path, success) {
            if (success) {
              // already cached
              ImgCache.useCachedFile(target);
            } else {
              // not there, need to cache the image
              ImgCache.cacheFile(target.attr('src'), function () {
                ImgCache.useCachedFile(target);
              });
            }
        });

        }, function () {
            console.log('ImgCache init: error! Check the log for errors');
    });
    
      
  }