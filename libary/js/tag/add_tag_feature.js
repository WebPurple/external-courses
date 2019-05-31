

function setAsBar(seekBar){
	seekBar.oninput = () => {
		var colorSquare = document.getElementById("tag-color");
		colorSquare.style.background = getTagColor();
	}
}

function getTagName(){
	return document.getElementById("tag-name").value.toLowerCase();
}

function setTagNameValue(val){
	document.getElementById("tag-name").value = val;
}

function getTagColor(){
	    var redBar = document.getElementById("red-bar");
		var greenBar = document.getElementById("green-bar");
		var blueBar = document.getElementById("blue-bar");
		return "rgb(" + redBar.value + ", " 
		+ greenBar.value + ", " + blueBar.value + ")";
}

function setAsAddTagButt(butt){
	butt.onclick = (e) => {
		e.preventDefault();
		var tag = createTag("button", getTagColor(), getTagName());
		var tagObj = new Tag(getTagName(), getTagColor());
		setAsTagFilter(tag, tagObj);
		document.getElementById("mapping-panel").appendChild(tag);
		setTagNameValue("");
		tagList.push(tagObj);
		refreshTagList();
	}
}

function refreshTagList(){
	var tagContainer = document.getElementById("tag-list");
	tagContainer.innerHTML = "";
	for(let tag of tagList){
		let opt = document.createElement("option");
		opt.innerText = tag.name;
		opt.style.color = tag.color;
		console.log(tag);
		tagContainer.appendChild(opt);
	}
}

function addTagArray(tagArray){
	var tagContainer = document.getElementById("mapping-panel");
	for(let tag of tagArray){
		let tagNode = createTag("button", tag.color, tag.name);
		setAsTagFilter(tagNode, tag);
		tagContainer.appendChild(tagNode);
	}
}

function setAsTagFilter(tagNode, tagObj){
	tagNode.onclick = () => {
		currentTag = new Tag(tagObj.name, tagObj.color);
		refreshBookTable();
	}
}

function createTag(containerType, circleColor, tagName){
	let tagCircle = document.createElement("i");
	tagCircle.setAttribute("class", "fa fa-circle");
	tagCircle.style.color = circleColor;
	var container = document.createElement(containerType);
	container.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;";
	container.insertBefore(tagCircle, container.firstChild);
	container.appendChild(document.createTextNode(tagName));
	return container;
}