console.log("Welcome to CJ");

let songidx = 0;
let audioElement = new Audio('1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songItems = Array.from(document.getElementsByClassName('songItem'));
let songs = [
    { songName: "The Revenge - Aari Aari", filePath: "1.mp3", coverPath: "1.jpg" },
    { songName: "Jaate Hue Lamhon ", filePath: "2.mp3", coverPath: "2.jpg" },
    { songName: "Jaan Se Guzarte Hain", filePath: "3.mp3", coverPath: "3.jpg" },
    { songName: "Khwaab Dekhoon", filePath: "4.mp3", coverPath: "4.jpg" },
    { songName: "Tabaahi", filePath: "5.mp3", coverPath: "5.jpg" },
    { songName: "Khat - Khat", filePath: "6.mp3", coverPath: "6.jpg" },
    { songName: "Chhaap Tilak ", filePath: "7.mp3", coverPath: "7.jpg" },
    { songName: "Sitaare", filePath: "8.mp3", coverPath: "8.jpg" },
    { songName: "Aashiqon Ki Colony", filePath: "9.mp3", coverPath: "9.jpg" },
    { songName: "Tere Bin Yaara", filePath: "10.mp3", coverPath: "10.jpg" }
]
songItems.forEach((element, i) => {
    element.getElementsByTagName('img')[0].src = songs[i].coverPath;
    element.getElementsByClassName('songName')[0].innerText = songs[i].songName;
});

masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();gif.style.opacity = 1;
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
audioElement.addEventListener('timeupdate', ()=>{
    console.log('timeupdate');
    progress = parseInt((audioElement.currentTime/audioElement.duration) *100);
    myProgressBar.value = progress;
})
myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllPlays();
        songidx = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songidx}.mp3`;
        masterSongName.innerText = songs[songidx-1].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');

    })
})

document.getElementById('next').addEventListener('click',()=>{
    if(songidx>=10){
        songidx = 0;
    }
    else{
        songidx += 1;
    }
    audioElement.src = `songs/${songidx}.mp3`;
    masterSongName.innerText = songs[songidx-1].songName;
        audioElement.currentTime = 0;
        audioElement.play();gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
})

document.getElementById('previous').addEventListener('click',()=>{
    if(songidx<=0){
        songidx = 0;
    }
    else{
        songidx -= 1;
    }
    audioElement.src = `songs/${songidx}.mp3`;
    masterSongName.innerText = songs[songidx-1].songName;
        audioElement.currentTime = 0;
        audioElement.play();gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');

})