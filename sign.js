function validateLogin(event) {
  event.preventDefault(); 
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  
  var correctEmail = "sdu@gmail.com";
  var correctPassword = "sdu1234567";

  
  if (email === correctEmail && password === correctPassword) {
      
      alert("Giriş başarılı! Yönlendiriliyorsunuz...");
      window.location.href = "person.html";
  } else {
    
      alert("Hatalı e-posta veya şifre. Lütfen tekrar deneyin.");
  }
}