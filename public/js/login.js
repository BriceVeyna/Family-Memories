const loginFormHandler = async (event) => {
  event.preventDefault();

  const username = document.querySelector("#inputUsername").value.trim();
  const password = document.querySelector("#inputPassword").value.trim();

  if (username && password) {
    const response = await fetch("/api/user/login", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/");
    } else {
      alert(response.statusText);
    }
  }
};

const loginButton = document.getElementById('login-button');
if(loginButton){
  loginButton.addEventListener('click', loginFormHandler);
};