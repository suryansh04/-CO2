var OzoneToggleContainer = document.querySelector(".ozone-toggle-container");
var OzoneChatbotContainer = document.querySelector(".ozone-chatbot-container");
var closeBtn = document.querySelector(".close-btn");
var ozone = document.querySelector(".ozone");
OzoneToggleContainer.addEventListener("click", () => {
  OzoneChatbotContainer.style.display = "flex";
  OzoneToggleContainer.style.display = "none";
});

closeBtn.addEventListener("click", () => {
  OzoneChatbotContainer.style.display = "none";
  OzoneToggleContainer.style.display = "flex";
});
