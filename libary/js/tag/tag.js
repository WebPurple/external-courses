class Tag extends Filter{
	
	constructor(name, color){
		super();
		this.name = name;
		this.color = color;
	}
	
	filterArray(bookArray){
		return bookArray.filter((book) => {
			return book.tags.indexOf(this.name) > -1;
		});
	}
}

tagList = [
{
	name: "must read titles",
	color: "rgb(255, 165, 0)"
},
{
	name: "best of list",
	color: "rgb(255, 255, 0)"
},
{
	name: "classic novels",
	color: "rgb(0, 0, 255)"
},
{
	name: "non fiction",
	color: "rgb(128, 128, 128)"
}
]