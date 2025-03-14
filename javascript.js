function toggleVideo() {
    var video = document.getElementById("myVideo");
    var btn = document.getElementById("videoControl");
    if (video.paused) {
        video.play();
        btn.textContent = "Pause";
    } else {
        video.pause();
        btn.textContent = "Resume";
    }
}

var typed = new Typed(".text", {
    strings:["Full-stack Developer", "Cybersecurity Analyst", "Data Analyst"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

