var bookList = [
{
	id: "1",
    title: "Jewels of Nizam",
    author: "Geeta Devi",
	src: "images/jewels.png",
	rating: 5,
    tags: ["must read titles", "non fiction"]
},
{
	id: "2",
	title: "Cakes & Bakes",
    author: "Sangeev Kapoor",
	src: "images/cakes.png",
	rating: 5,
    tags: []
},
{
	id: "3",
	title: "Jamie's Kitchen",
    author: "Jamie Oliver",
	src: "images/kitchen.png",
	rating: 4,
    tags: []
},
{
	id: "4",
	title: "Inexpensive Family Meals",
    author: "Simon Holst",
	src: "images/easy.png",
	rating: 4,
    tags: ["must read titles"]
},
{
	id: "5",
	title: "Paleo Slow Cooking",
    author: "Crissy Gover",
	src: "images/paleo.png",
	rating: 4,
    tags: []
},
{
	id: "6",
	title: "Cook Like an Italian",
    author: "Tobbe Puttock",
	src: "images/italian.png",
	rating: 4,
    tags: ["must read titles"]
},
{
	id: "7",
	title: "Suneeta Vaswani",
    author: "Geeta Devi",
	src: "images/indian.png",
	rating: 5,
    tags: []
},
{
	id: "8",
	title: "Jamie Does",
    author: "Jamie Oliver",
	src: "images/spain.png",
	rating: 4,
    tags: []
},
{
	id: "9",
	title: "Jamie's Italy",
    author: "Jamie Oliver",
	src: "images/italy.png",
	rating: 4,
    tags: []
},
{
	id: "10",
	title: "Vegetables Cookbook",
    author: "Matthew Biggs",
	src: "images/vegetables.png",
	rating: 3,
    tags: ["must read titles"]
}

];

class Book{
	
	constructor(id, title, author, src){
		this.id = id;
		this.title = title;
		this.author = author;
		this.src = src;
		this.rating = 0;
		this.tags = [];	
	}
	
	addTag(tag){
		this.tags.push(tag);
	}
}