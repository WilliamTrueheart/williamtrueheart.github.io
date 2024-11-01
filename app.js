function updateMainImage(num) {
    let mainImage = document.getElementById('mainImage');
    let navItem1 = document.getElementById('navItem1');
    let navItem2 = document.getElementById('navItem2');
    let navItem3 = document.getElementById('navItem3');
    let navItem4 = document.getElementById('navItem4');

    if (num === 1) {
        mainImage.style.backgroundImage = "url('photos/Logo.jpg')"
        navItem1.style.opacity = '100%';
        navItem2.style.opacity = '50%';
        navItem3.style.opacity = '50%';
        navItem4.style.opacity = '50%';
    }
    if (num === 2) {
        mainImage.style.backgroundImage = "url('photos/product mockups.jpg')"
        navItem1.style.opacity = '50%';
        navItem2.style.opacity = '100%';
        navItem3.style.opacity = '50%';
        navItem4.style.opacity = '50%';
    }
    if (num === 3) {
        mainImage.style.backgroundImage = "url('photos/Trifold.jpg')"
        navItem1.style.opacity = '50%';
        navItem2.style.opacity = '50%';
        navItem3.style.opacity = '100%';
        navItem4.style.opacity = '50%';
    }
    if (num === 4) {
        mainImage.style.backgroundImage = "url('photos/Stationary.jpg')";
        navItem1.style.opacity = '50%';
        navItem2.style.opacity = '50%';
        navItem3.style.opacity = '50%';
        navItem4.style.opacity = '100%';
    }
}

function updateMainImage2(num) {
    let mainImage = document.getElementById('mainImage');
    let navItem5 = document.getElementById('navItem5');
    let navItem6 = document.getElementById('navItem6');
    let navItem7 = document.getElementById('navItem7');
    let navItem8 = document.getElementById('navItem8');

    if (num === 1) {
        mainImage2.style.backgroundImage = "url('photos/Social3.jpg')"
        navItem5.style.opacity = '100%';
        navItem6.style.opacity = '50%';
        navItem7.style.opacity = '50%';
        navItem8.style.opacity = '50%';
    }
    if (num === 2) {
        mainImage2.style.backgroundImage = "url('photos/Social_Prod1.jpg')"
        navItem5.style.opacity = '50%';
        navItem6.style.opacity = '100%';
        navItem7.style.opacity = '50%';
        navItem8.style.opacity = '50%';
    }
    if (num === 3) {
        mainImage2.style.backgroundImage = "url('photos/Web.jpg')"
        navItem5.style.opacity = '50%';
        navItem6.style.opacity = '50%';
        navItem7.style.opacity = '100%';
        navItem8.style.opacity = '50%';
    }
    if (num === 4) {
        mainImage2.style.backgroundImage = "url('photos/Billboard.jpg')";
        navItem5.style.opacity = '50%';
        navItem6.style.opacity = '50%';
        navItem7.style.opacity = '50%';
        navItem8.style.opacity = '100%';
    }
}

function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }

  window.addEventListener("scroll", reveal);

// To check the scroll position on page load
reveal();
