const HISTORY_PATTERN = {
  year: 'numeric',
  month: 'numeric',
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric'
};

function setAsHistoryButton(butt){
	butt.onclick = () => {
		hidePageContent();
		showHistoryPage();
	}
}


function hideHistoryPage(){
	var histPanel = document.getElementById("history");
	histPanel.style.display = "none";
}

function showHistoryPage(){
	var histPanel = document.getElementById("history");
	histPanel.style.display = "flex";
}

function addHistMessage(message){
	var hist = document.getElementById("history");
	var nowDate = new Date();
	var historyMessage = document.createTextNode(nowDate.toLocaleString("en-US"
	, HISTORY_PATTERN) + " : " + message);
	hist.insertBefore(document.createElement("p"), hist.firstChild);
	hist.insertBefore(historyMessage, hist.firstChild);
}