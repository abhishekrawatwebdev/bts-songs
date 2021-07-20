const data = [
    {
        name: "Black swan",
        image: "./images/blackswan.jpg",
        src: "./songs/Black.mp3"

    },
    {
        name: "Boy in love",
        image: "./images/boyin.jpg",
        src: "./songs/Boyinlove.mp3"

    },
    {
        name: "Boy with love",
        image: "./images/boywith.jpg",
        src: "./songs/Boywith.mp3"

    },
    {
        name: "Brand",
        image: "./images/brand.jpg",
        src: "./songs/Brand.mp3"

    },
    {
        name: "Bulletproof boys",
        image: "./images/bullet.jpg",
        src: "./songs/Bulletproof.mp3"

    },
    {
        name: "Butter",
        image: "./images/butter.jpg",
        src: "./songs/Butter.mp3"

    },
    {
        name: "Chicken",
        image: "./images/chicken.jpg",
        src: "./songs/Chicken.mp3"

    },
    {
        name: "Danger",
        image: "./images/danger.jpg",
        src: "./songs/Danger.mp3"

    },
    {
        name: "DNA",
        image: "./images/dna.jpg",
        src: "./songs/DNA.mp3"

    },
    {
        name: "Dynamite",
        image: "./images/dyna.jpg",
        src: "./songs/Dynamite.mp3"

    },
    {
        name: "Fake love",
        image: "./images/fake.jpg",
        src: "./songs/FAKE.mp3"

    },
    {
        name: "Film",
        image: "./images/film.jpg",
        src: "./songs/Film.mp3"

    },
    {
        name: "Go Go ",
        image: "./images/go.jpg",
        src: "./songs/Go.mp3"

    },
    {
        name: "Idol",
        image: "./images/idol.jpg",
        src: "./songs/IDOL.mp3"

    },
    {
        name: "Just",
        image: "./images/just.jpg",
        src: "./songs/Just.mp3"

    },
    {
        name: "Life GOes on",
        image: "./images/life.jpg",
        src: "./songs/Life.mp3"

    },
    {
        name: "Mic",
        image: "./images/mic.jpg",
        src: "./songs/MIC.mp3"

    },
    {
        name: "NO",
        image: "./images/no.jpg",
        src: "./songs/NO.mp3"

    },
    {
        name: "Permission To DAnce",
        image: "./images/dance.png",
        src: "./songs/Permission.mp3"

    },
    {
        name: "SAvage Love",
        image: "./images/savage.png",
        src: "./songs/Savage.mp3"

    },
    {
        name: "Today",
        image: "./images/not.jpg",
        src: "../songs/TODAY.mp3"

    }
];
let image = document.getElementById("image");
let audio = document.getElementById("song");
let Name = document.getElementById("name");
let prevBtn = document.getElementById("prev");
let playBtn = document.getElementById("playpause");
let nextBtn = document.getElementById("next");
let songIndex = 0;
let playPause = document.getElementById("both");
let Duration = document.getElementById("duration");
let curtime = document.getElementById("curtime");
let slider = document.getElementById("slider");
let isPlaying = false;
let Case = document.querySelector(".case");

const loadMusic = () => {
    image.src = data[songIndex].image;
    audio.src = data[songIndex].src;
    Name.innerHTML = data[songIndex].name;

}

loadMusic();


const playMusic = () => {
    audio.play();
    playPause.src = "./icons/pause.png";
    isPlaying = true;
}

const pauseMusic = () => {
    audio.pause();
    isPlaying = false;
    playPause.src = "./icons/play.png";
}
playBtn.addEventListener('click', () => {
    if (isPlaying === false) {
        playMusic();
    }
    else if (isPlaying === true) {
        pauseMusic();
    };
});
nextBtn.addEventListener('click', () => {
    songIndex = (songIndex + 1) % data.length;
    nextBtn.style.backgroundColor = "white";
    loadMusic();
    playMusic();

});
prevBtn.addEventListener('click', () => {
    songIndex = (songIndex - 1 + data.length) % data.length;
    prevBtn.style.backgroundColor = "white";
    loadMusic();
    playMusic();

});
audio.addEventListener('timeupdate', (event) => {
    // console.log(e);
    let { currentTime, duration } = event.srcElement;
    // console.log(Math.round(currentTime));
    let curminutes = Math.floor(currentTime / 60);
    let cursec = Math.floor(currentTime % 60);
    let lastminutes = Math.floor(duration / 60);
    let lastsec = Math.floor(duration % 60);
    if (cursec < 10) {
        curtime.textContent = `0${curminutes}:0${cursec}`;
    }
    else {
        curtime.textContent = `${curminutes}:${cursec}`;
    }
    if (duration) {
        if (lastsec < 10) {
            Duration.textContent = `0${lastminutes}:0${lastsec}`;
        }
        else {
            Duration.textContent = `0${lastminutes}:${lastsec}`;
        }
    }
    if (currentTime == duration) {
        songIndex = (songIndex + 1) % data.length;
        nextBtn.style.backgroundColor = "white";
        loadMusic();
        playMusic();
    }


    slider.style.width = `${(currentTime / duration) * 100}%`

});
Case.addEventListener('click', (e) => {
    const { duration } = audio;
    let move = (e.offsetX / e.srcElement.clientWidth) * duration
    audio.currentTime = move;
});
