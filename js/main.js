const imgPixie = document.querySelector("#pixie");
const imgLulu = document.querySelector("#lulu");
const glowPixie = document.querySelector(".ll-responsive-img-link-pixie");
const glowLulu = document.querySelector(".ll-responsive-img-link-lulu");
const abilitiesScroll = document.querySelector(".ll-abilities-scroll");
const backTranslate = document.querySelector(".prev-ability");
const nextTranslate = document.querySelector(".next-ability");
const abilityLetter = document.querySelectorAll(".ll-menu-abilities-letter");
var sliderContainer = document.querySelector(".ll-abilities-scroll");
var sliderItem = document.querySelectorAll(".ll-slider");
var sliderListWidth;
var sliderPos = 0;
var sliderCounter = 1;
var skinCircle = document.querySelectorAll(".ll-skin-circle");
var skin = document.querySelector(".ll-skin img");
const menuMobileIcon = document.querySelector(".ll-menu-top-mobile ion-icon");
const menuMobile = document.querySelector(".ll-menu-top-mobile");
const menuMobileItems = document.querySelectorAll(".ll-menu-item-mobile");

imgPixie.addEventListener("mouseenter", function (e) {
  glowPixie.style.opacity = 1;
});
imgPixie.addEventListener("mouseleave", function (e) {
  glowPixie.style.opacity = 0;
});
imgLulu.addEventListener("mouseenter", function (e) {
  glowLulu.style.opacity = 1;
});
imgLulu.addEventListener("mouseleave", function (e) {
  glowLulu.style.opacity = 0;
});

const containerWidth = sliderContainer.parentElement.offsetWidth;
sliderContainer.style.width = containerWidth * 5 + "px";

for (let index = 0; index < sliderItem.length; index++) {
  sliderItem[index].style.width = containerWidth + "px";
}

const slideTranslate = () => {
  anime({
    targets: abilitiesScroll,
    translateX: sliderPos,
    duration: 600,
    easing: "cubicBezier(.33,1.47,.7,-0.56)",
  });
};
var backTrans = () => {
  if (sliderPos == "0") {
    return;
  }
  sliderCounter--;
  sliderPos += containerWidth;
  slideTranslate();
};
var nextTrans = () => {
  if (sliderPos == -containerWidth * 4) {
    return;
  }
  sliderCounter++;
  sliderPos -= containerWidth;
  slideTranslate();
};
var removeHighlight = () => {
  for (let index = 0; index < abilityLetter.length; index++) {
    abilityLetter[index].classList.remove("ll-highlight");
  }
};
var addHightlight = () => {
  abilityLetter[sliderCounter - 1].classList.add("ll-highlight");
};

backTranslate.addEventListener("click", function (e) {
  backTrans();
  removeHighlight();
  addHightlight();
});
nextTranslate.addEventListener("click", function (e) {
  nextTrans();
  removeHighlight();
  addHightlight();
});
for (let index = 0; index < abilityLetter.length; index++) {
  abilityLetter[index].addEventListener("click", function (e) {
    sliderPos = -containerWidth * index;
    sliderCounter = index + 1;
    slideTranslate();
    removeHighlight();
    addHightlight();
  });
}

for (let index = 0; index < skinCircle.length; index++) {
  skinCircle[index].addEventListener("click", function (e) {
    skin.setAttribute(
      "src",
      skinCircle[index].getAttribute("src").replace("Circle", "Skin")
    );
  });
}

var menuMobileOpenClose = () => {
  menuMobileIcon.classList.toggle("ll-rotate");
  if (menuMobileItems[0].classList.contains("ll-display-block") === true) {
    menuMobileItems[0].classList.remove("ability-mobile");
    menuMobileItems[1].classList.remove("lore-mobile");
    menuMobileItems[2].classList.remove("skins-mobile");
    setTimeout(() => {
      for (let index = 0; index < menuMobileItems.length; index++) {
        menuMobileItems[index].classList.remove("ll-display-block");
      }
    }, 300);
  } else {
    for (let index = 0; index < menuMobileItems.length; index++) {
      menuMobileItems[index].classList.add("ll-display-block");
    }
    setTimeout(() => {
      menuMobileItems[0].classList.add("ability-mobile");
      menuMobileItems[1].classList.add("lore-mobile");
      menuMobileItems[2].classList.add("skins-mobile");
    }, 50);
  }
};
menuMobile.addEventListener("click", function (e) {
  menuMobileOpenClose();
});

if (window.DeviceOrientationEvent) {
  window.addEventListener(
    "orientationchange",
    function () {
      location.reload();
    },
    false
  );
}

function activateFullscreen(element) {
  if (element.requestFullscreen) {
    element.requestFullscreen(); // W3C spec
  } else if (element.mozRequestFullScreen) {
    element.mozRequestFullScreen(); // Firefox
  } else if (element.webkitRequestFullscreen) {
    element.webkitRequestFullscreen(); // Safari
  } else if (element.msRequestFullscreen) {
    element.msRequestFullscreen(); // IE/Edge
  }
}
