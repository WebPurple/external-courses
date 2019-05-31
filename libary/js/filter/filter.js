class Filter{
	
	filterArray(bookArray){
		return bookArray;
	}
}


function refilterArray(array){
	return currentTag.filterArray(currentFilter.filterArray(array));
}

function chooseFilter(targetFilter, filters){
	for(var i = 0; i < filters.length; i++){
		filters[i].style.background = "rgb(238,241,248)";
	}
	targetFilter.style.background = "rgb(152,179,206)";
}