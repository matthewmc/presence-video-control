var timer_delay = 2000; // Delay before pausing starts.  
window.onload = function(){
    var tracker = new tracking.ObjectTracker('face');
    var setTimer = function(){
        return window.setTimeout(function(){
            bg.pause();
            pause_switch = true;
            }, timer_delay);
    }
    // Videos are already playing.  Set timer to trigger pausing.  
    var pause_switch = false;
    var timer_id = setTimer();
    var bg = chrome.extension.getBackgroundPage();
    
    // These parameters are from an example on the tracking.js website.  
    tracker.setInitialScale(4);
    tracker.setStepSize(2);
    tracker.setEdgesDensity(0.1);
    tracking.track('#video', tracker, {camera: true});
    tracker.on('track', function(event){
        // console.log('obj', event);

        // If there are events (faces or other features detected)
        if (event.data.length > 0){
            // If paused.  See Netflix's single function video toggling
            // for why this checks video status.
            if (pause_switch == true){
                bg.play();
            }
            window.clearTimeout(timer_id);  // Defuse timer.
            // Set new timer.  
            timer_id = setTimer();
            pause_switch = false;
        }
    });
};

