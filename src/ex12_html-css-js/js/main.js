var getJSON = function(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'json';
    xhr.onload = function() {
        var status = xhr.status;
        if (status === 200) {
            callback(null, xhr.response);
        } else {
            callback(status, xhr.response);
        }
    };
    xhr.send();
};
//use that
var cardsBlock = document.getElementById('main');
getJSON('https://rsu-library-api.herokuapp.com/books',
    function(err, data) {
        if (err !== null) {
            alert('Something went wrong: ' + err);
        } else {
            for(var i=0;i<data.length;i++){
                console.log('id: ' + data[i].id);
                console.log('author: ' + data[i].author.firstName);
                cardsBlock.innerHTML = cardsBlock.innerHTML +
                    "<div class=\"main-card\">" +
                    "<img src=\"" +
                    data[i].image_url +
                    "\" alt=\"\">" +
                    "<p id=\"card-book\">"+
                    data[i].title +
                    "</p>"+
                    "<p id=\"card-author\">by "+
                    data[i].author.firstName+" "+
                    data[i].author.lastName+
                    "</p>"+
                    "<div class=\"card-rating\">\n" +
                    "            <i class=\"fas fa-star\"></i>\n" +
                    "            <i class=\"fas fa-star\"></i>\n" +
                    "            <i class=\"fas fa-star\"></i>\n" +
                    "            <i class=\"fas fa-star\"></i>\n" +
                    "            <i class=\"fas fa-star\"></i>\n" +
                    "        </div>"+
                    "</div>"
            }
        }
    });