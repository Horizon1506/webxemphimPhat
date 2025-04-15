var swiper = new Swiper(".popular-content", {
  slidesPerView: 1,
  spaceBetween: 10,
  autoplay: {
    delay: 5500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    280: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    320: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    510: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    758: {
      slidesPerView: 3,
      spaceBetween: 15,
    },
    900: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
  },
});

// Get all play buttons (both the main one and trailer button)
let playButtons = document.querySelectorAll(".play-movie, .play-trailer");
let video = document.querySelector(".video-container");
let myvideo = document.querySelector("#myVideo"); // Fixed ID to match your HTML (was #myvideo)
let closebtn = document.querySelector(".close-video");

// Add event listeners to all play buttons
playButtons.forEach(button => {
  button.addEventListener("click", function(e) {
    e.preventDefault(); // Prevent default action for anchor tags
    video.classList.add("show-video");
    myvideo.play();
  });
});

closebtn.addEventListener("click", function() {
  video.classList.remove("show-video");
  myvideo.pause();
  myvideo.currentTime = 0; // Reset video to start
});