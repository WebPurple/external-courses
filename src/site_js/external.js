

var arrOfBooks=[{book:"Jewels of Nizam", firstName:"Geeta",secondName:"Devi", recent:2004, isPopular:1, nonFiction:false, free:25, best:false, classic:true, isMustRead:false, cover:document.getElementById("image1")}
,{book:"Cakes & Bakes", firstName:"Sanjeev",secondName:"Kapoor", recent:2008, isPopular:4, nonFiction:false, free:0, best:true, classic:false, isMustRead:false, cover: document.getElementById("image2")}
,{book:"Jamie's Kitchen", firstName:"Jamie",secondName:"Oliver", recent:2011, isPopular:7, nonFiction:false, free:56, best:false, classic:false, isMustRead:false, cover:document.getElementById("image3")}
,{book:"Inexpensive Family Meals",firstName:"Simon",secondName:"Hoist", recent:2004, isPopular:3, nonFiction:false, free:27, best:true, classic:false, isMustRead:false, cover:document.getElementById("image4")}
,{book:"Paleo Slow Cooking",firstName:"Chrissy",secondName:"Gower", recent:2007, isPopular:6, nonFiction:false, free:12, best:false, classic:true, isMustRead:false, cover:document.getElementById("image5")}
,{book:"Cook Like an Italian",firstName:"Tobie",secondName:"Puttock", recent:2016, isPopular:4, nonFiction:false, free:0, best:false, classic:false, isMustRead:false, cover: document.getElementById("image6")}
,{book:"Suneeta Vaswani", firstName:"Geeta",secondName:"Devi", recent:2015, isPopular:9, nonFiction:false, free:78, best:false, classic:true, isMustRead:false, cover: document.getElementById("image7")}
,{book:"Jamie Does", firstName:"Jamie",secondName:"Oliver", recent:2000, isPopular:3, nonFiction:false, free:2, best:false, classic:false, isMustRead:false, cover:document.getElementById("image8")}
,{book:"Jamie's Italy", firstName:"Jamie",secondName:"Oliver", recent:2012, isPopular:10, nonFiction:false, free:0, best:false, classic:false, isMustRead:false, cover:document.getElementById("image9")}
,{book:"Vegetables Cookbook", firstName:"Matthew",secondName:"Biggs", recent:2018, isPopular:0, nonFiction:false, free:5, best:true, classic:true, isMustRead:false, cover:document.getElementById("image10")}]



var searchBook=document.getElementById("searchID");
var booksClass=document.querySelector(".wrapper .Books_vertical");
var addingABook=document.querySelector(".wrapper .addingABook");
var addABook=document.getElementById("addBook");
var addFirstName=document.getElementById("addFirstName");
var addSecondName=document.getElementById("addSecondName");
var addRecent=document.getElementById("addRecent");
var addIsPopular=document.getElementById("addIsPopular");
var addFree=document.getElementById("addFree");
var addCover=document.getElementById("addCover");
var addSubmit=document.getElementById("submitId");
var mustBook=document.getElementById("mustBook");
var mustReadBook=document.querySelector(".wrapper .must");
var addToMustReadBook=document.getElementById("addToMustRead");
var writeOutMustReadList=document.getElementById("writeOutMustReadList");


var MustReadCheckBox=document.getElementById("MustReadCheckBox");
var BestOfListCheckBox=document.getElementById("BestOfListCheckBox");
var ClassicNovelsCheckBox=document.getElementById("ClassicNovelsCheckBox");
var NonFictionCheckBox=document.getElementById("NonFictionCheckBox");


function createNewId(){
	var createdNewId=String(arrOfBooks.length);
	return createdNewId;
}

function objectCreate(){
	var history=document.getElementById("history");
	this.book=addABook.value;
	this.firstName=addFirstName.value;
	this.secondName=addSecondName.value;
	this.recent=addRecent.value;
	this.isPopular=addIsPopular.value;
	this.free=addFree.value;
	this.isMustRead=Boolean(MustReadCheckBox.checked);
	this.best=Boolean(BestOfListCheckBox.checked);
	this.classic=Boolean(ClassicNovelsCheckBox.checked);
	this.nonFiction=Boolean(NonFictionCheckBox.checked);
	var parentElement=document.getElementById("addElem");
	var newImg = document.createElement('img');
	newImg.src=addCover.value;
	newImg.style="width:15%;height:40%";
	parentElement.appendChild(newImg);
	newImg.id=createNewId();
	this.cover=document.getElementById(newImg.id)
	history.innerHTML+="You've added a new book "+this.book+" by "+this.firstName+" "+this.secondName+"; ";
	addABook.value=null;
	addFirstName.value=null;
	addSecondName.value=null;
	addRecent.value=null;
	addIsPopular.value=null;
	addFree.value=null;
}

function newBook(){
	addingABook.style.display="none";
	booksClass.style.display="flex";
    var addedBook=new objectCreate();
    arrOfBooks.push(addedBook);
}



 function allId(){
   	for(var i=0;i<arrOfBooks.length;i++){
   		arrOfBooks[i].cover.style.display="block";
   		arrOfBooks[i].cover.style.opacity="1";
   	}
   }




function freeBooks(){
	allId();
	for(var i=0;i<arrOfBooks.length;i++){
		if(arrOfBooks[i].free!=0){
			arrOfBooks[i].cover.style.display="none";
		}
	}

}




function popular(){
	allId();
	for(var i=0;i<arrOfBooks.length;i++){
		if(arrOfBooks[i].isPopular<5){
			arrOfBooks[i].cover.style.display="none";
		}
	}
	
}

function mostRecent(){
	allId();
	for(var i=0;i<arrOfBooks.length;i++){
		if(arrOfBooks[i].recent<2010){
			arrOfBooks[i].cover.style.display="none";
		}
	}
	
}


function search(){
	allId();
	var searchedBook=searchBook.value;
	for(var i=0;i<arrOfBooks.length;i++){
		if((searchedBook==arrOfBooks[i].book)||(searchedBook==arrOfBooks[i].firstName)||(searchedBook==arrOfBooks[i].secondName)||(searchedBook==arrOfBooks[i].firstName+
		" "+arrOfBooks[i].secondName)){
			arrOfBooks[i].cover.style.display="block";
		}
		else{
			arrOfBooks[i].cover.style.display="none";
		}
	}
}



searchBook.onsearch=search;

document.getElementById('mostId').onclick=mostRecent;

document.getElementById('popularId').onclick=popular;

document.getElementById("allId").onclick=allId;

document.getElementById("freeId").onclick=freeBooks;




document.getElementById('addABookId').onclick=function(){
	addingABook.style.display="flex";
	booksClass.style.display="none";
}


document.getElementById('CancelAdd').onclick=function(){
	addingABook.style.display="none";
	booksClass.style.display="flex";
}


addSubmit.onclick=newBook;


must.onclick=function(){
	mustReadBook.style.display="flex";
	booksClass.style.display="none";
	addingABook.style.display="none";
}


/*var mustReadBookArray=new Array;

addToMustReadBook.onclick=function(){
	mustReadBookArray.push(mustBook.value);
	var history=document.getElementById("history");
	history.innerHTML+="You've added a book "+mustBook.value+" to MustRead titles"+"; ";
	alert(mustReadBookArray.length);
	mustReadBook.style.display="none";
	booksClass.style.display="flex";

}*/

/*writeOutMustReadList.onclick=function(){
	booksClass.style.display="flex";
	mustReadBook.style.display="none";
    for(var i=0;i<arrOfBooks.length;i++){
			if(arrOfBooks[i].book==mustReadBookArray[j]||arrOfBooks[i].book==mustReadBookArray[j]){
			    arrOfBooks[i].cover.style.opacity="1";
			}
			else{
				arrOfBooks[i].cover.style.opacity="0.3";
			}
		}
	}
}
*/

addToMustReadBook.onclick=function(){
	var history=document.getElementById("history");
	history.innerHTML+="You've added a book "+mustBook.value+" to MustRead titles"+"; ";
	for(var i=0;i<arrOfBooks.length;i++){
		if(arrOfBooks[i].book==mustBook.value){
			arrOfBooks[i].isMustRead=true;
		}
	}
	mustReadBook.style.display="none";
	booksClass.style.display="flex";
	mustBook.value=null;
}

writeOutMustReadList.onclick=function(){
	booksClass.style.display="flex";
	mustReadBook.style.display="none";
    for(var i=0;i<arrOfBooks.length;i++){
			if(arrOfBooks[i].isMustRead==true){
				arrOfBooks[i].cover.style.display="1";
			}
			else{
				arrOfBooks[i].cover.style.opacity="0.3";
			}
	}
}


document.getElementById('CancelMust').onclick=function(){
	mustReadBook.style.display="none";
	booksClass.style.display="flex";
}





document.getElementById('classic').onclick=function(){
	mustReadBook.style.display="none";
	booksClass.style.display="flex";
	    for(var i=0;i<arrOfBooks.length;i++){
			if(arrOfBooks[i].classic==true){
				arrOfBooks[i].cover.style.opacity="1";
			}
			else{
				arrOfBooks[i].cover.style.opacity="0.3";
			}
	}
}





document.getElementById('best').onclick=function(){
	mustReadBook.style.display="none";
	booksClass.style.display="flex";
	    for(var i=0;i<arrOfBooks.length;i++){
			if(arrOfBooks[i].best==true){
				arrOfBooks[i].cover.style.opacity="1";
			}
			else{
				arrOfBooks[i].cover.style.opacity="0.3";
			}
	}
}



document.getElementById('non_fiction').onclick=function(){
	mustReadBook.style.display="none";
	booksClass.style.display="flex";
	    for(var i=0;i<arrOfBooks.length;i++){
			if(arrOfBooks[i].nonFiction==true){
				arrOfBooks[i].cover.style.opacity="1";
			}
			else{
				arrOfBooks[i].cover.style.opacity="0.3";
			}
	}
}