function togglePopUp(){
  document.getElementById("popup-1").classList.toggle("active");
}

// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
} 

/* Menü aktív állapot */
document.querySelectorAll('.menu-item').forEach(item => {
    item.addEventListener('click', function () {
        document.querySelectorAll('.menu-item').forEach(i => i.classList.remove('active'));
        this.classList.add('active');
    });
});

/* Menü aktív állapot */
document.querySelectorAll('.menu-item').forEach(item => {
    item.addEventListener('click', function () {
        document.querySelectorAll('.menu-item').forEach(i => i.classList.remove('active'));
        this.classList.add('active');
    });
});

/* JÁTÉK gomb */
document.getElementById('playBtn').addEventListener('click', () => {
    document.getElementById('message').textContent =
        'A tartalom a te régiódban nem elérhető';
});

/* Szív ikon */
const heart = document.getElementById('heart');
heart.addEventListener('click', () => {
    heart.classList.toggle('inactive');
});

  const video = document.querySelector('.live-photo');

video.addEventListener('mouseenter', () => {
    video.play();
});

video.addEventListener('mouseleave', () => {
    video.pause();
    video.currentTime = 0;
});

video.addEventListener('mouseleave', () => {
video.pause();

const rewind = setInterval(() => {
    if (video.currentTime <= 0.1) {
    video.currentTime = 0;
    clearInterval(rewind);
    } else {
    video.currentTime -= 0.05;
    }
}, 16);
});

video.addEventListener('touchstart', () => {
video.play();
});
