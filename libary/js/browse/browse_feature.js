function setAsBrowseButton(elem){
	elem.onclick = () => {
		hideHistoryPage();
		showPageContent();
	}
}

function hidePageContent(){
	var libContent = document.getElementById("lib-content");
	libContent.style.display = "none";
}

function showPageContent(){
	var histPanel = document.getElementById("lib-content");
	histPanel.style.display = "block";
}