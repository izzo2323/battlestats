// console.log (Username)
function Login(e) {
    e.preventDefault()
    var Username = document.getElementById("Username").value
    var Password = document.getElementById("Password").value
    console.log (Username)
    if (!Password || !Username) {
        document.getElementById("error").innerText = "Please Enter Username and Password"
}
  else if(Password.length < 8 ) {
    document.getElementById("error").innerText = "Password Must Be 8 Characters"
  } 
  else{
    localStorage.setItem("Username", Username)
      window.location.assign("./homepage.html")
  }
}
var button = document.getElementById("loginBtn")
button.addEventListener("click", Login)

