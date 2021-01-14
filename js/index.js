import "../css/styles.scss";
const Handlebars = require("handlebars");
const $ = document.querySelectorAll.bind(document);

const workItemContainer = $(".content")[0];
const hamBurger = $(".hamburger")[0];
const bars = $(".hamburger span");
const mobileNav = $(".mobile-nav")[0];
const mobileNavLinks = $(".mobile-nav>ul li >a");

let isActive = true;

var source = document.getElementById("work-item-template").innerHTML;

function addWorkItemToContainer(context) {
  var template = Handlebars.compile(source);
  var html = template(context);
  workItemContainer.innerHTML += html;
}

var project1 = {
  title: "Video Chat",
  githublink: "https://github.com/sahiljulka/video-conference-app",
  urllink: "https://video2chat.herokuapp.com/",
  backgroundLink: "assets/video2chat.png",
};

var project2 = {
  title: "File Share Chat",
  githublink: "https://github.com/sahiljulka/file-share",
  urllink: "https://sendit123.herokuapp.com/",
  backgroundLink: "assets/filesharee.png",
};

var project3 = {
  title: "Pizza Order App",
  githublink: "https://github.com/sahiljulka/pizza-order-app",
  urllink: "https://pizza-ordr.herokuapp.com",
  backgroundLink: "assets/pizza-app.jpeg",
};

addWorkItemToContainer(project1);
addWorkItemToContainer(project2);
addWorkItemToContainer(project3);

hamBurger.addEventListener("click", function () {
  if (isActive) {
    showMobileNav();
  } else {
    hideMobileNav();
  }
});

function hideMobileNav() {
  bars[0].style.transform = "rotate(0deg)";
  bars[1].style.opacity = "1";
  bars[2].style.transform = "rotate(0deg)";
  mobileNav.style.opacity = "0";
  mobileNav.style.zIndex = 0;
  isActive = !isActive;
}

function showMobileNav() {
  bars[0].style.transform = "rotate(45deg)";
  bars[1].style.opacity = "0";
  bars[2].style.transform = "rotate(-45deg)";
  mobileNav.style.opacity = "1";
  mobileNav.style.zIndex = 11;
  isActive = !isActive;
}

(() => {
  mobileNavLinks.forEach((element) => {
    element.addEventListener("click", () => {
      hideMobileNav();
    });
  });
})();
