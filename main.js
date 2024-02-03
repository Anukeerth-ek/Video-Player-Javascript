let playBtn = document.getElementById('play-btn');
let video = document.querySelector('.video');

let isVideoPlaying = false;

let progressBar = document.querySelector('.progress-bar');

let progressRange=document.querySelector('.progress-range');

function videoPlayingOrNot(event){
   


    if ( isVideoPlaying == false) { 
       
        video.play();
        isVideoPlaying = true;
        playBtn.classList.replace("fa-play","fa-pause");
    }
    else{
        video.pause();
        isVideoPlaying = false;
        playBtn.classList.replace("fa-pause","fa-play");
    }

}

// creation of progressbar ==========================================

function creationOfProgressBar(event){
    let currentTime = event.target.currentTime;
    let duration = event.target.duration;
    
    progressBar.style.cssText = ` width:${(currentTime / duration)*100

    }%`;
    


}
// End of progressbar-------------------------------------------



function updateSeek(event){
   
    console.log(this);
    let currentPoint = event.offsetX;
    let progressBarWidth =this.clientWidth;
    let currentRange = (currentPoint / progressBarWidth)*video.duration;
    
    video.currentTime = currentRange;

}


playBtn.addEventListener("click",videoPlayingOrNot);
video.addEventListener("click",videoPlayingOrNot);

video.addEventListener("timeupdate",creationOfProgressBar);
progressRange.addEventListener("click",updateSeek);




// keyboard events-----------------------------------------

document.addEventListener("keyup",event =>{

    if ( event.code == "Space"  || event.key ==" ") { 
       
        video.play();
        isVideoPlaying = true;
        playBtn.classList.replace("fa-play","fa-pause");
        
    } 
     else {
        video.pause();
        isVideoPlaying = false;
        playBtn.classList.replace("fa-pause","fa-play");
    }
})

// keyboard events ends=====================================================
    

