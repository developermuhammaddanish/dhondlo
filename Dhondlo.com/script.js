var swiper = new Swiper(".teamSlider", {
  slidesPerView: 1,
  spaceBetween: 70,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
  navigation: {
    nextEl: ".team-btn-next",
    prevEl: ".team-btn-prev",
  },
  breakpoints: {
    400: {
      slidesPerView: 1,
    },
    640: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2,
      //   spaceBetween: 5,
      slidesPerGroup: 1,
    },
    992: {
      slidesPerView: 3,
      //   spaceBetween: 20,
      slidesPerGroup: 1,
    },
    1280: {
      slidesPerView: 3,
      //   spaceBetween: 20,
      slidesPerGroup: 1,
    },
    1750: {
      slidesPerView: 3,
      //   spaceBetween: 20,
      slidesPerGroup: 1,
    },
  },
});

var swiper = new Swiper(".serviceSlider", {
  slidesPerView: 4,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  //   navigation: {
  //     nextEl: ".swiper-button-next",
  //     prevEl: ".swiper-button-prev",
  //   },
  loop: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    992: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
  },
});

var swiper = new Swiper(".partnerSlider", {
  slidesPerView: 4,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  //   navigation: {
  //     nextEl: ".swiper-button-next",
  //     prevEl: ".swiper-button-prev",
  //   },
  loop: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    992: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
  },
});

var swiper = new Swiper(".home-slider", {
  grabCursor: true,
  loop: true,
  centeredSlides: true,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// hero slider

var slideImg = document.getElementById("slideImg");

var images = new Array(
  "./images/hero/home-slide1.jpg",
  "./images/hero/home-slide2.jpg",
  "./images/hero/home-slide3.jpg",
  "./images/hero/home-slide4.jpg"
);

var len = images.length;
var i = 0;

function heroSlider() {
  if (i > len - 1) {
    i = 0;
  }
  slideImg.src = images[i];
  i++;
  setTimeout("heroSlider()", 3000);
}


// nav bar
      function toggleMenu() {
        var icon = document.querySelector(".icon");
        icon.classList.toggle("active");

        var nav = document.querySelector("nav");
        nav.classList.toggle("menu-open");
      }

      // JavaScript function to set the active class
      function setActive(menuItem) {
        // Remove the active class from all menu items
        document.querySelectorAll("nav a").forEach((item) => {
          item.classList.remove("active");
        });

        // Add the active class to the clicked menu item
        document.getElementById(menuItem).classList.add("active");
      }

//back to top
document.addEventListener('DOMContentLoaded', function () {
  window.addEventListener('scroll', function () {
      var scrollPosition = window.scrollY || document.documentElement.scrollTop;

      // Adjust the scroll position threshold as needed
      if (scrollPosition > 200) {
          document.getElementById('back-to-top').style.display = 'block';
      } else {
          document.getElementById('back-to-top').style.display = 'none';
      }
  });
});

function scrollToTop() {
  window.scrollTo({
      top: 0,
      behavior: 'smooth'
  });
}      
