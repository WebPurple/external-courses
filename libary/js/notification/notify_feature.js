const HISTORY_PANEL_ID = "history-panel";

function addNotification(message){
	var histPanel = document.getElementById(HISTORY_PANEL_ID);
	var icon = document.createElement("i");
	icon.setAttribute("class", "fa fa-clock-o");
	icon.setAttribute("aria-hidden", true);
	var histContainer = document.createElement("div");
	histContainer.setAttribute("class", "history-element");
	histContainer.appendChild(icon);
	histContainer.appendChild(document.createTextNode(message));
	histPanel.insertBefore(histContainer, histPanel.firstChild);
}