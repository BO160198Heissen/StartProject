var block = document.getElementById("div");
var paragraph = document.createElement("p");
var img = document.createElement("img");
var ul = document.createElement("ul");
var li = document.createElement("li");
var h = document.createElement("h1");
var data = ["JS", "HTML", "Node.js", "CSS"];


h.innerHTML="Анкета";
block.appendChild(h);
img.src="http://bipbap.ru/wp-content/uploads/2017/04/72fqw2qq3kxh.jpg";
img.classList.add("photo");
block.appendChild(img);
block.appendChild(paragraph);
paragraph.classList.add("desription");
paragraph.innerHTML="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.";
block.appendChild(ul);
for (var i = 0, ln = data.length; i < ln; i++) {
  var li = document.createElement('li');
  li.innerHTML = data[i];
  ul.appendChild(li);
}