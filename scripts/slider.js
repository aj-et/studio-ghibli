// JS

// This is for the hero box slider
const slider_img = document.querySelector('.slide-img');
const slider_text = document.getElementById('slide-text');
let images = ['howls.jpg', 'dragon.jpg', 'totoro.jpg'];
let title = ['Howl\'s Moving Castle', 'Tales from Earthsea', 'My Neighbor Totoro'];
let i = 0; // Current image index
let t = 0; // Current text index

function prev(){
    if(i <= 0) i = images.length;
    i--;

    if(t <= 0) t = title.length;
    t--;

    return setImg();
}

function next(){
    if(i >= images.length-1 ) i = -1;
    i++;

    if(t >= title.length-1 ) t = -1;
    t++;

    return setImg();
}

function setImg(){
    slider_img.setAttribute('src', './images/' + images[i]);
    slider_text.innerHTML = title[i];
    return;
}

// This is for the news box slider on timer
const news_img = document.getElementById('news-img');
let news_images = ['SG&SW2.jpg', 'SG&SW3.jpg', 'SG&SW4.jpg'], n=0;

function autoPic(){
    if(n >= news_images.length-1 ) n = -1;
    n++;
    news_img.setAttribute('src', './images/' + news_images[n]);
}

setInterval(autoPic, 3000);