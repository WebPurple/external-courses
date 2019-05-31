const MODAL_ID_POSITION = 0;

function setAsInfoCallable(img){
	img.onclick = () => {
		setupModalWindow(img);
	}
}

function setAllBooksAsInfoCallable(images){
	for(var img of images){
		setAsInfoCallable(img);
	}
}

function refreshBookTags(id){
	let book = findBookById(id);
	let tagContainer = document.getElementById("book-tag-list");
	tagContainer.innerHTML = "";
	for(let tag of book.tags){
		tagContainer.insertBefore(document.createTextNode(tag), tagContainer.firstChild);
		tagContainer.insertBefore(document.createElement("br"), tagContainer.firstChild);
	}
}

function setupModalWindow(img){
	var imgHref = img.getAttribute("src");
	var bookInfo = img.parentNode.childNodes;
	var title = bookInfo[TITLE_POSITION].innerText;
	var author = bookInfo[AUTHOR_POSITION].innerText;
	document.getElementById("book-id").value = bookInfo[MODAL_ID_POSITION].value;
	document.getElementById("book-image").setAttribute("src", imgHref);
	document.getElementById("book-title").innerText = title;
	document.getElementById("book-author").innerText = author;
	document.getElementById("book-info-close").onclick = () => {
		document.getElementById("modal-window").style.display = "none";
	}
	refreshBookTags(bookInfo[MODAL_ID_POSITION].value);
	document.getElementById("modal-window").style.display = "flex";
	refreshTagList();
}