$(document).ready(function () {
  $("img").click(function () {
    $(".box").fadeToggle();
  });
});
$(document).ready(function () {
  $("#loginForm").submit(function (event) {
    event.preventDefault();

    var email = $("#email").val();
    var password = $("#password").val();

    if (email === "sdu@gmail.com" && password === "sdu1234567") {
      window.location.href = "reseaux.html";
    } else {
      alert("Invalid email or password. Please try again.");
    }
  });
});
