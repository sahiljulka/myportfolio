import "../css/styles.scss";
const Handlebars = require("handlebars");
const $ = document.querySelector.bind(document);

const workItemContainer = $(".content");

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
  backgroundLink: "../assets/video2chat.png",
};

var project2 = {
  title: "File Share Chat",
  githublink: "https://github.com/sahiljulka/file-share",
  urllink: "https://sendit123.herokuapp.com/",
  backgroundLink: "../assets/filesharee.png",
};

addWorkItemToContainer(project1);
addWorkItemToContainer(project2);
