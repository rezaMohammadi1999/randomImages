function show() {
    let img = document.createElement('img')
    let images=[
        // url images
        "images/ee.png",
        "images/download.png",
        "images/download.jpg",
        "images/images.jpg",
    ]
    let index = Math.floor(Math.random()*images.length);
    img.setAttribute('src',images[index]);
    document.querySelector('body').appendChild(img);
}
show()