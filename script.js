var requestURL = 'https://rsu-library-api.herokuapp.com/books';
		var request = new XMLHttpRequest();
		request.open('GET', requestURL);
		request.responseType = 'text';
		request.send();
		request.onload = function () {
			var booksText = request.response;
			var books = JSON.parse(booksText);
			var numberBooks = 0;
			for(let i = 0; i < books.length; i++) {
				var wrapper = document.querySelector('article');
				var bookItem = document.createElement('div');
				bookItem.className = "book_item";
				bookItem.style.margin = "20px";
				wrapper.appendChild(bookItem);
				var bookItem_img = document.createElement('img');
				bookItem_img.src = books[i].image_url;
				bookItem.appendChild(bookItem_img);
				bookItem_p = document.createElement('p');
				bookItem_p.innerHTML = books[i].title;
				bookItem.appendChild(bookItem_p);
				bookItem_p2 = document.createElement('p');
				bookItem_p2.innerHTML = "by " + books[i].author.firstName + " " + books[i].author.lastName;
				bookItem.appendChild(bookItem_p2);
				bookItem_p.style.margin = "12px";
				bookItem_p2.style.color = "#6f7d95";
				console.log(bookItem.innerHTML);
			};

			////SORTING///

			///most popular///

			var li_popular = document.getElementById('popular');
			var rating_sort = function () {
				books.sort(function(a, b) {
				return b.rating - a.rating;
			});
				wrapper.innerHTML = "";
				for(let i = 0; i < books.length; i++) {				
					var bookItem = document.createElement('div');
					bookItem.className = "book_item";
					bookItem.style.margin = "20px";
					wrapper.appendChild(bookItem);
					var bookItem_img = document.createElement('img');
					bookItem_img.src = books[i].image_url;
					bookItem.appendChild(bookItem_img);
					bookItem_p = document.createElement('p');
					bookItem_p.innerHTML = books[i].title;
					bookItem.appendChild(bookItem_p);
					bookItem_p2 = document.createElement('p');
					bookItem_p2.innerHTML = "by " + books[i].author.firstName + " " + books[i].author.lastName;
					bookItem.appendChild(bookItem_p2);
					bookItem_p.style.margin = "12px";
					bookItem_p2.style.color = "#6f7d95";
				}
			}
			li_popular.addEventListener('click', rating_sort);
		
		///most recent///
		
		var li_recent = document.getElementById('recent');
		var update_sort = function () {
				books.sort(function(a, b) {
				return b.updatedAt - a.updatedAt;
			});
				wrapper.innerHTML = "";
			for(let i = 0; i < books.length; i++) {					
					var bookItem = document.createElement('div');
					bookItem.className = "book_item";
					wrapper.appendChild(bookItem);
					var bookItem_img = document.createElement('img');
					bookItem_img.src = books[i].image_url;
					bookItem.appendChild(bookItem_img);
					bookItem_p = document.createElement('p');
					bookItem_p.innerHTML = books[i].title;
					bookItem.appendChild(bookItem_p);
					bookItem_p2 = document.createElement('p');
					bookItem_p2.innerHTML = "by " + books[i].author.firstName + " " + books[i].author.lastName;
					bookItem.appendChild(bookItem_p2);
					bookItem_p2.style.color = "#6f7d95";
				}
				}
				li_recent.addEventListener('click', update_sort);
			}


		///SEARCH///

		const article = document.querySelector('article');
			const searchBar = document.forms['search-form'].querySelector('input');
			searchBar.addEventListener('keyup', function(e) {
				const term = e.target.value.toLowerCase();
				const books_select = article.getElementsByTagName('div');
				Array.from(books_select).forEach(function(book) {
					const title = book.textContent;
					if(title.toLowerCase().indexOf(term) !== -1) {
						// eslint-disable-next-line no-param-reassign
						book.style.display = 'block';
					} else {
						// eslint-disable-next-line no-param-reassign
						book.style.display = "none";
					}
				})
		});