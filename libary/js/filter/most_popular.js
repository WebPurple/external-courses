class MostPopularFilter extends Filter{
	
	filterArray(bookArray){
		return bookArray.filter((book) => {
			return book.rating == NUMBER_OF_STARS;
		});
	}
}
function getFilterArray(){
	return document.getElementsByClassName("filter");
}


function isRatingMax(ratingContainer){
	
	return filterNodes(ratingContainer.childNodes)[0].checked;
}

function setAsRatingFilter(elem){
	elem.onclick = function(){
		var filters = getFilterArray();
		chooseFilter(elem, filters);
		currentFilter = new MostPopularFilter();
		refreshBookTable();
		var historyMessage = "You chose most popular filter";
		addHistMessage(historyMessage);
		addNotification(historyMessage);
	}
}
