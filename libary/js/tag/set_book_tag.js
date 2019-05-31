function setAsAdderTagToBook(elem){
	elem.onclick = (event) => {
		event.preventDefault();
		let bookId = document.getElementById("book-id").value;
		let tagName = document.getElementById("tag-list").value;
		findBookById(bookId).tags.push(tagName);
		refreshBookTags(bookId);
	}
}