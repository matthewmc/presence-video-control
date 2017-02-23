# presence-video-control
Chrome extension that controls various video players with face detection 

Uses tracking.js (as you can see, someone else implemented the difficult portions) which is contained in scripts/tracking.js-master.  See trackingjs.com for their documentation etc.  

This is their license:
Software License Agreement (BSD License)

Copyright (c) 2014, Eduardo A. Lundgren Melo.
All rights reserved.

Redistribution and use of this software in source and binary forms, with or without modification, are
permitted provided that the following conditions are met:

* Redistributions of source code must retain the above
  copyright notice, this list of conditions and the
  following disclaimer.

* Redistributions in binary form must reproduce the above
  copyright notice, this list of conditions and the
  following disclaimer in the documentation and/or other
  materials provided with the distribution.

* The name of Eduardo A. Lundgren Melo may not be used to endorse or promote products
  derived from this software without specific prior
  written permission of Eduardo A. Lundgren Melo.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED
WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A
PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR
ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR
TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF
ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

# How to use:
Enter developer mode in chrome.  Load this as an unpacked extension.  Open options page and grant camera permission.  While watching something on Netflix or Youtube, click the extension button to prompt the popup.  If the extension stops detecting your face, the video player should pause, and if it starts detecting it again, it should resume the player.  
