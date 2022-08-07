// document.getElementById("home-button").addEventListener("click", homePage)

//   function homePage() {
//     document.location.replace("/")
//   }

function homePage() {
    document.location.replace("/");
  }
  
  const homeButton = document.getElementById("home-button");
  if (homeButton) {
    homeButton.addEventListener("click", homePage);
  }
  