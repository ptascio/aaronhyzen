var outerOverlay;
var closeButton;
function overlay() {
	outerOverlay.style.display = "block";
}

function hideModal(e){
	outerOverlay.style.display = "none";
}

window.onclick = function (e){
  if (e.target === outerOverlay){
    hideModal(e.target);
  }
};

document.addEventListener("DOMContentLoaded", () => {
    outerOverlay = document.getElementById("modal");
    closeButton = document.getElementById("close-button");
    closeButton.addEventListener("click", hideModal, false);
});
