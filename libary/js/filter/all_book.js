class AllBookFilter extends Filter{
	
	filterArray(bookArray){
		return bookArray;
	}
}

function setAsAllBookFilter(elem){
	elem.onclick = function(){
		var filters = getFilterArray();
		chooseFilter(elem, filters);
		currentFilter = new AllBookFilter();
		refreshBookTable();
		var historyMessage = "You chose all book filter";
		addHistMessage(historyMessage);
		addNotification(historyMessage);
	}
}

