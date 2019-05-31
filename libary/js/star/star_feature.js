const TITLE_POSITION = 2;
const AUTHOR_POSITION = 3;

function setAsStarRating(elem){
	elem.onclick = () => {
		let bookNodeId = elem.parentNode.parentNode.childNodes[BOOK_ID_POSITION].value;
		findBookById(bookNodeId).rating = elem.value;
		let title = elem.parentNode.parentNode.childNodes[TITLE_POSITION];
		let author = elem.parentNode.parentNode.childNodes[AUTHOR_POSITION];
		let historyMessage = "You rate " + title.innerText + " book " 
		+ author.innerText + " as " + elem.value + " stars";
		addHistMessage(historyMessage);
		addNotification(historyMessage);
	}
}
