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

function goHome(callback){
	window.location = "file:///Users/ptascio/Desktop/aaronhyzen/index.html";
}

function launch(){
		overlay();
}

function doitAll(){
	goHome();
}



document.addEventListener("DOMContentLoaded", () => {
    outerOverlay = document.getElementById("modal");
    closeButton = document.getElementById("close-button");
    closeButton.addEventListener("click", hideModal, false);
});
