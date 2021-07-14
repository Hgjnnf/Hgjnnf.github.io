var target = document.querySelectorAll("Card");

target.forEach(tag => tag.addEventListener('mouseover', function() {
    var hidden = tag.getElementsByClassName("hidden");
    var title = tag.getElementsByClassName("title");
    var image = tag.getElementsByTagName("img");

    hidden[0].style.display = "block";
    title[0].style.display = "none";
    image[0].style.display = "none";
}));

target.forEach(tag => tag.addEventListener('mouseout', function() {
    var hidden = tag.getElementsByClassName("hidden");
    var title = tag.getElementsByClassName("title");
    var image = tag.getElementsByTagName("img");

    hidden[0].style.display = "none";
    title[0].style.display = "block";
    image[0].style.display = "block";
}));