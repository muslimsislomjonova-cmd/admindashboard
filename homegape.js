const form = document.getElementById("loginForm");
const message = document.getElementById("message");

form.addEventListener("submit", function (e) {
  e.preventDefault(); 

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const loginData = {
    username: "mor_2314",
    password: "83r5^_"
  };

  fetch("https://fakestoreapi.com/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(loginData)
  })
    .then(res => res.json())
    .then(data => {
      if (data.token) {
        localStorage.setItem("token", data.token);
        message.innerText = "Login successful!";
        message.style.color = "green";

        window.location.href = "./title/_home__pages.html";
      } else {
        message.innerText = "Login failed!";
        message.style.color = "red";
      }
    })
    .catch(err => {
      message.innerText = "Server error!";
      message.style.color = "red";
    });
});
