// Domain patterns for chrome.tabs.query parameter
var domains = ['https://www.youtube.com/*', 'https://www.netflix.com/*']
var paused_tabs = [];

// Sends messages to valid tabs running content scripts to pause videos.
// Keeps track of paused tabs to resume.
function pause(){
    console.log('Sent pause message.');
    chrome.tabs.query({audible: true, url: domains},
                       function(tabs){
                            var message = {text: 'pause'};
                            for(i in tabs){
                                paused_tabs.push(tabs[i].id);  // Keep track of paused tabs
                                chrome.tabs.sendMessage(tabs[i].id, message);
                            }
                       })
}

// Sends messeages to paused tabs to play content.  
function play(){
    console.log('Sending play message to following tabs', paused_tabs);
    paused_tabs.forEach(function(id){
        var message = {text: 'play'};
        chrome.tabs.sendMessage(id, message);
    })
    paused_tabs = []; // Reset the tabs we've been keeping track of.
}
