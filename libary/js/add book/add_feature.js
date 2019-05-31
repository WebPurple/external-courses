const NUMBER_OF_STARS = 5;
const BOOK_ID_POSITION = 0;

function setAddBookFeature(elem){
	elem.onclick = function(event){
		event.preventDefault();
		
		var img = window.URL.createObjectURL(document.getElementById("image").files[0]);
		var title = document.getElementById("title").value;
		var author = document.getElementById("author").value;
		var book = createBook(img,
                     		author, title, NUMBER_OF_STARS,
							            addedBook.id, 0);
		addBookToList(book);
		var addedBook = new Book(countNumberBooks() + 1 + "", title, author, img);
		bookList.push(addedBook);
		refreshBookTable();
		var historyMessage = "You added " + title + " by " + author + " to all books";
		addHistMessage(historyMessage);
		addNotification(historyMessage);
	}
}

function addBookToList(book){
	var bookTable = document.getElementById("table-container");
	bookTable.appendChild(book);
}

function hideBookArray(array){
	for(let book of array){
		hideUnwanted(book);
	}
}

function showBookArray(array){
	for(let book of array){
		showWanted(book);
	}
}

function addBookArray(bookArray){
	for(let book of bookArray){
		addBookToList(createBook(book.src, book.author, book.title, NUMBER_OF_STARS, book.id, book.rating));
	}
}


function countNumberBooks(){
	return document.getElementsByClassName("container").length;
}

function createBook(img, author, title, numberOfStars, id, currentRating){
	var container = createDiv("container");
	var bookContainer = createDiv("book-present");
	var imageElem = createBookImage(img);
	bookContainer.appendChild(createHiddenInput(id));
	bookContainer.appendChild(imageElem);
	bookContainer.appendChild(createTextSpan(title, "book-name"));
	bookContainer.appendChild(createTextSpan("by " + author, "author"));
	bookContainer.appendChild(createStarRaiting(id, numberOfStars, currentRating));
	container.appendChild(bookContainer);
	setAsInfoCallable(imageElem);
	return container;
}

function createStarRaiting(bookNumber, numberOfStars, currentRating){
	var raitingContainer = createDiv("rating");
	for(var i = numberOfStars; i > 0; i--){
		let starInput = createRadioInput("star" + bookNumber + (numberOfStars - i + 1),
		"rating" + bookNumber, i);
	    setAsStarRating(starInput);
		if(i == currentRating){
			starInput.checked = true;
		}
		let starLabel = createLabel("full", "star" + bookNumber + (numberOfStars - i + 1));
		raitingContainer.appendChild(starInput);
		raitingContainer.appendChild(starLabel);
	}
	return raitingContainer;
}

function createRadioInput(id, name, value){
	var input = document.createElement("input");
	input.setAttribute("type", "radio");
	input.setAttribute("id", id);
	input.setAttribute("name", name);
	input.setAttribute("value", value);
	return input;
}

function createHiddenInput(value){
	var input = document.createElement("input");
	input.setAttribute("type", "hidden");
	input.setAttribute("value", value);
	return input;
}

function createLabel(labelClass, forValue){
	var label = document.createElement("label");
	label.setAttribute("class", labelClass);
	label.setAttribute("for", forValue);
	return label;
}

function createDiv(divClass){
	var div = document.createElement("div");
	div.setAttribute("class", divClass);
	return div;
}

function createTextSpan(spanText, spanClass){
	var span = document.createElement("span");
	span.setAttribute("class", spanClass);
	span.innerHTML = spanText;
	return span;
}

function isRowFull(row){
	return row.childNodes.length >= MAX_BOOK_PER_ROW;
}

function getBookNodeArrayByArray(array){
	var nodeArray = [];
	var bookContainers = document.getElementsByClassName("book-present");
	for(let container of bookContainers){
		let id =  container.childNodes[BOOK_ID_POSITION].value;
		for(let book of array){
			if(book.id.localeCompare(id) == 0){

				nodeArray.push(container.parentNode);
				break;
			}
		}
	};
	return nodeArray;
}

function findBookById(id){
	for(let book of bookList){
		if(book.id.localeCompare(id) == 0){
			return book;
		}
	}
}

function createBookImage(bookImage){
	var img = document.createElement("img");
	img.setAttribute("src", bookImage);
	return img;
}

function refreshBookTable(){
	currentBookList = refilterArray(bookList);
	hideBookArray(document.getElementsByClassName("container"));
	showBookArray(getBookNodeArrayByArray(currentBookList));
}