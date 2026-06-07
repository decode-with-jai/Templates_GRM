const popupOverlay = document.getElementById("popupOverlay");
const closePopup = document.getElementById("closePopup");
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");


// 🔥 PUT YOUR MAIN LINK HERE
// const GLOBAL_LINK = "user_your_google_ads_link_bade_bhaiya";



// Mobile menu
if (menuToggle && navMenu) {
  menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
  });
}

// Show popup after 10 seconds
setTimeout(() => {
  if (popupOverlay) {
    popupOverlay.classList.add("active");
    document.body.style.overflow = "hidden";
  }
}, 10000);

// Close popup with X
if (closePopup) {
  closePopup.addEventListener("click", () => {
    popupOverlay.classList.remove("active");
    document.body.style.overflow = "auto";
  });
}

// Close popup by clicking outside
if (popupOverlay) {
  popupOverlay.addEventListener("click", (e) => {
    if (e.target === popupOverlay) {
      popupOverlay.classList.remove("active");
      document.body.style.overflow = "auto";
    }
  });
}



// Select all buttons with same class
const buttons = document.querySelectorAll(".global-btn");

buttons.forEach(btn => {
  btn.addEventListener("click", function(e) {
    e.preventDefault(); // stop default action
    window.location.href = GLOBAL_LINK;
  });
});