const logoutFormHandler = async () => {
  const response = await fetch("/api/user/logout", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    document.location.replace("/");
  } else {
    alert(response.statusText);
  }
};

var logoutButton = document.getElementById("logout-button");
if (logoutButton) {
  logoutButton.addEventListener("click", logoutFormHandler);
}