
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let progressbar = document.getElementById('progressBar');
let gif = document.getElementById('gif');
let masterSongName=document.getElementById('masterSongName')
let songitem = Array.from(document.getElementsByClassName('songItem'));
let songs=[
    {songName :"Warriyo-Mortals (feats.laura brehm)[NCS Release]",filePath:"songs/1.mp3",coverPath:"covers/1.jpg" },
    {songName :"Cielo - Huma-Huma",filePath:"songs/2.mp3",coverPath:"covers/2.jpg" },
    {songName :"DEAF KEV -Invincible[NCS Release]-320k",filePath:"songs/3.mp3",coverPath:"covers/3.jpg" },
    {songName :"MIND FRESH",filePath:"songs/4.mp3",coverPath:"covers/4.jpg" },
    {songName :"DIL CHODUUU",filePath:"songs/5.mp3",coverPath:"covers/5.jpg" },
    {songName :"BHULA DHENA-salam-e-ishq",filePath:"songs/6.mp3",coverPath:"covers/6.jpg" },
    {songName :"salam-e-ishq",filePath:"songs/7.mp3",coverPath:"covers/7.jpg" },
    {songName :"salam-e-ishq",filePath:"songs/8.mp3",coverPath:"covers/8.jpg" },
]


songitem.forEach((element,i)=>{
        console.log(element,i);
        element.getElementsByTagName("img")[0].src=songs[i].coverPath;
        //  element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})

masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})

audioElement.addEventListener('timeupdate',()=>{
            // console.log("time");
            progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
            progressBar.value = progress;
})
progressBar.addEventListener('change',()=>{
    audioElement.currentTime = progressBar.value *audioElement.duration/100 ;
})
const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.classList.add('fa-play-circle');
    element.classList.remove('fa-pause-circle');
    })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
            element.addEventListener('click',(e)=>{
                    makeAllPlays();
                    index = parseInt(e.target.id);
                    e.target.classList.remove('fa-play-circle');
                    e.target.classList.add('fa-pause-circle');
                    audioElement.src=`songs/${songIndex+1}.mp3`;
                    masterSongName.innerText = songs[songIndex].songName;
                    audioElement.currentTime=0;
                    audioElement.play();
                    gif.style.opacity = 1;
                    masterPlay.classList.remove('fa-play-circle');
                    masterPlay.classList.add('fa-pause-circle');
            })

})
document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})