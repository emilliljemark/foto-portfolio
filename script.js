// Image pop-up

function showImage(src) {
    document.getElementById("varImg").src = src;
    document.getElementById("dimmer").style.display = "block";
    document.getElementById("imageViewer").style.display = "block";
}

function closeImage() {
    document.getElementById("dimmer").style.display = "none";
    document.getElementById("imageViewer").style.display = "none";
}

// Dropdown

function drop() {
    links = document.getElementById("links");
    console.log(links.style.display)
    if (links.style.display == "block") {
        links.style.display = "none";
    }
    else {
        links.style.display = "block";
    }
}