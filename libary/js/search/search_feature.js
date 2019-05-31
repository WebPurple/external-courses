function hideUnwanted(elem){
	elem.style.display = "none";
}

function showWanted(elem){
	elem.style.display = "inline-block";
}

function isWanted(header, searchField){
	return header.search(new RegExp(searchField));
}


function setAsSearch(searchInput, bookNameClass){
	searchInput.oninput = () => {
		var headerNodes = getBookNodeArrayByArray(currentBookList);
		for(let headerNode of headerNodes){
			console.log(headerNode);
			if(isWanted(headerNode.firstChild.childNodes[TITLE_POSITION]
			.innerText.toLowerCase(), searchInput.value.toLowerCase()) > -1){
			    showWanted(headerNode);
		    }else{
				hideUnwanted(headerNode);
			}
			
		} 
		var historyMessage = "You enter " + searchInput.value;
		addHistMessage(historyMessage);
		addNotification(historyMessage);
	}
}