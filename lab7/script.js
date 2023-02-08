const form = document.querySelector(".form");
const container = document.querySelector(".container");
const userName = document.querySelector("#user-input");
const password = document.querySelector("#pass-input");
const submitBtn = document.querySelector("#submit-btn");
const text= document.querySelector(".text");
document.body.style.background = "pink";
container.style.display = "flex";
container.style.justifyContent = "center";
container.style.alignItems = "center";
container.style.height = "100vh";

form.style.background = "white";
form.style.display = "flex";
form.style.flexDirection = "column";
form.style.justifyContent = "center";
form.style.alignItems = "center";
form.style.borderRadius = "1rem";
form.style.gap = "1rem";
form.style.padding = "30px";



userName.style.height = "2rem";
userName.style.padding = "5px";
userName.style.width = "100%";
userName.style.borderColor = "#FADBD8";
userName.style.borderRadius = "1rem";

password.style.height = "2rem";
password.style.padding = "5px";
password.style.width = "100%";
password.style.borderColor = "#FADBD8";
password.style.borderRadius = "1rem";

submitBtn.style.width = "100%";
submitBtn.style.padding = "6px";
submitBtn.style.background = "#FADBD8";
submitBtn.style.borderRadius = "1rem";
submitBtn.style.height = "2rem";
submitBtn.style.color = "white";
submitBtn.style.cursor = "pointer";
submitBtn.style.borderStyle = "none";

text.style.color = "#C4AEAD";
text.style.cursor = "pointer";

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const uName = userName.value;
  const uPassword = password.value;
  const user = new User(uName, uPassword);
  if (user._validUser()) {
    alert(`Welcome,${user.name} `);
  } else {
    alert("not registered");
  }
});
class User {
  constructor(name, password) {
    this.name = name;
    this.passsword = password;
  }
  _validUser() {
    if (this.name === "Rowan" && this.passsword === "1999") {
      return true;
    }
    return false;
  }
}
