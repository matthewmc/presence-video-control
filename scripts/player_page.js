function play_vid(site){
    if (site == 'www.youtube.com'){
        var player = document.getElementsByTagName('video')[0];
        player.play();
    }
    if (site == 'www.netflix.com'){
        document.getElementsByClassName("player-control-button player-play-pause")[0].click();
    }
}

function pause_vid(site){
    if (site == 'www.youtube.com'){
        var player = document.getElementsByTagName('video')[0];
        player.pause();
    }
    if (site == 'www.netflix.com'){
        document.getElementsByClassName("player-control-button player-play-pause")[0].click();
    }
}

var site = document.location.host;

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse){
        console.log(request);
        if (request.text == 'play'){
            play_vid(site);
        }
        if (request.text == 'pause'){
            pause_vid(site);
        }
    }
)
