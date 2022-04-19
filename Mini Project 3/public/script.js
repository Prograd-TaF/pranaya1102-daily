//handling user login and signup
var userCount = 0;
function validateUser() {
  const firstName = document.getElementById("fname").value;
  const lastName = document.getElementById("lname").value;
  const email = document.getElementById("signup-user-email").value;
  const username = document.getElementById("user_name").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmpassword").value;
  const nameRegex = /^([a-zA-Z]){1,10}$/;
  if (!nameRegex.test(firstName) || !nameRegex.test(lastName)) {
    alert(
      `name can contain 1 to 10 characters only, no special characters or numbers are allowed`
    );
    return false;
  }
  const emailRegex = /^([a-zA-Z0-9\.]+)@([a-zA-Z]+).com/;
  if (!emailRegex.test(email)) {
    alert(`email is invalid`);
    return false;
  }
  const userRegex = /([a-zA-Z0-9]+)/;
  if (!userRegex.test(username)) {
    alert("username can contain alphabets and numbers only");
    return false;
  }
  const passwordRegex = /^[A-Za-z]\w{7,14}$/;
  if (!passwordRegex.test(password)) {
    alert(
      "password between 6 to 20 characters which contain at least one numeric digit, one uppercase and one lowercase letter"
    );
    return false;
  }
  if (password !== confirmPassword) {
    alert(`passwords to not match`);
    return false;
  }
  if(localStorage.getItem(username)!==null){
    alert("user exist");
    return false;
  }
  if(localStorage.getItem(email)!==null){
    alert("Email exist");
    return false;
  }
  return true;
}
function createAccount() {
  if (!validateUser()) return;
  const userObject = {
    firstName: document.getElementById("fname").value,
    lastName: document.getElementById("lname").value,
    email : document.getElementById("signup-user-email").value,
    username: document.getElementById("user_name").value,
    password: document.getElementById("password").value,
  };
  console.log(userObject);
  localStorage.setItem(userObject.username, JSON.stringify(userObject));
  userCount++;
  location.href = "http://localhost:8081/login";
}

function loginUser() {
  const username = document.getElementById("login-user").value;
  const password = document.getElementById("login-password").value;
  const storedUser = localStorage.getItem(username);
  if (storedUser !== null) {
    console.log("user exists");
    const storedUserPassword = JSON.parse(storedUser).password;
    console.log(storedUserPassword);
    if (password === storedUserPassword) {
      console.log("credentials matched");
      location.href = "http://localhost:8081/index";
      const userData = localStorage.getItem(username);
      sessionStorage.setItem("user", userData);
    } else {
      alert(`incorrect password`);
    }
  } else {
    alert("user does not exists");
  }

}