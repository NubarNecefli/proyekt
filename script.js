let btn = document.getElementsByClassName("show-more-less-btn")[0];
btn.addEventListener("click", () => {
  document
    .getElementsByClassName("ad-2-right-section-list")[0]
    .classList.toggle("hide");
  if (btn.firstElementChild.innerHTML == "Show more") {
    btn.firstElementChild.innerHTML = "Show less";
    btn.lastElementChild.style.transform = "rotate(0deg)";
  } else {
    btn.firstElementChild.innerHTML = "Show more";
    btn.lastElementChild.style.transform = "rotate(180deg)";
  }
});

let box1 = document.getElementsByClassName("ad-4-box-1")[0];
let box2 = document.getElementsByClassName("ad-4-box-2")[0];
let box3 = document.getElementsByClassName("ad-4-box-3")[0];
let flag = 1;
let rightBtn = document.getElementsByClassName("ad-4-right-btn")[0];
let leftBtn = document.getElementsByClassName("ad-4-left-btn")[0];
leftBtn.style.visibility = "hidden";
rightBtn.addEventListener("click", () => {
  if (flag == 1) {
    box2.classList.add("active");
    leftBtn.style.visibility = "visible";
    flag = 2;
  } else if (flag == 2) {
    box3.classList.add("active");
    rightBtn.style.visibility = "hidden";
    flag = 3;
  }
});
leftBtn.addEventListener("click", () => {
  if (flag == 3) {
    box3.classList.remove("active");
    rightBtn.style.visibility = "visible";
    flag = 2;
  } else if (flag == 2) {
    box2.classList.remove("active");
    leftBtn.style.visibility = "hidden";
    flag = 1;
  }
});

let dropdownlist = document.getElementsByClassName("ad-5-list")[0];
let dropdownBtn = document.getElementById("ad-5-btn");

dropdownBtn.addEventListener("click", () => {
  dropdownlist.classList.toggle("ad-5-list-hide");
});

//get the app
var linkElement = document.getElementById("link-4");
linkElement.addEventListener("click", function (event) {
  alert("Bu uygulamayı açmak istiyor: https://az.linkedin.com");
});

document.getElementById("myForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const formData = new FormData(this);

  const email = formData.get("email");
  const password = formData.get("password");

  const expectedEmail = "sdu@gmail.com";
  const expectedPassword = "sdu1234567";

  if (email === expectedEmail && password === expectedPassword) {
    window.location.href = "./person.html";
  } else {
    alert("Incorrect email or password. Please try again.");
  }
});
