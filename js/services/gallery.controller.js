'use strict';


function init() {
    renderGallery()
}

let gImgs = [

    { id: '1',  src: "img/1.jpg",  keywords: ['trump', 'angry'] },
    { id: '2',  src: 'img/2.jpg',  keywords: ['dog', 'happy'] },
    { id: '3',  src: 'img/3.jpg',  keywords: ['baby', 'dog'] },
    { id: '4',  src: 'img/4.jpg',  keywords: ['cat', 'sleep'] },
    { id: '5',  src: 'img/5.jpg',  keywords: ['baby', 'angry'] },
    { id: '6',  src: 'img/6.jpg',  keywords: ['sarcastic', 'smart'] },
    { id: '7',  src: 'img/7.jpg',  keywords: ['happy', 'baby'] },
    { id: '8',  src: 'img/8.jpg',  keywords: ['smile', 'happy'] },
    { id: '9',  src: 'img/9.jpg',  keywords: ['happy', 'baby'] },
    { id: '10', src: 'img/10.jpg', keywords: ['obama', 'smile'] },
    { id: '11', src: 'img/11.jpg', keywords: ['angry', 'fight'] },
    { id: '12', src: 'img/12.jpg', keywords: ['sarcastic', 'angry'] },
    { id: '13', src: 'img/13.jpg', keywords: ['party', 'happy'] },
    { id: '14', src: 'img/14.jpg', keywords: ['matrix', 'angry'] },
    { id: '15', src: 'img/15.jpg', keywords: ['smile', 'nice'] },
    { id: '16', src: 'img/16.jpg', keywords: ['happy', 'nice'] },
    { id: '17', src: 'img/17.jpg', keywords: ['putin', 'angry'] },
    { id: '18', src: 'img/18.jpg', keywords: ['toy', 'scared'] },

];
// how many times the users search for a word and by the search count times this word will grow
let gKeywordSearchCountMap =
{
    'funny': 12, 'cat': 16, 'baby': 2,
    'party': 12, 'smile': 16, 'putin': 2,
    'obama': 12, 'happy': 16, 'sleep': 2,
    'dog': 12, 'fight': 16, 'sarcastic': 2,
    'matrix': 12, 'obama': 16, 'angry': 2,
    'toy': 12, 'scared': 16,
}


function renderGallery() {
    let elGallery = document.querySelector('.gallery-container')
    let strHtml = ``
    gImgs.map((img) => {
        strHtml += `<div onclick="onClickMeme(${img.id})" class="meme"><img src="${img.src}"></div>`
    })
    elGallery.innerHTML = strHtml 
}

// get image by id
function onImgSelect(id){
    gMeme.selectedImgId = id
    gMeme.selectedLineIdx = -1
    renderCanvas()
}

function onClickMeme(id){
    onImgSelect(id)
    var elSerachBar = document.querySelector('.search-box')
    elSerachBar.style.display = "none"
    var elClickedImg = document.querySelector('.gallery-container')
    elClickedImg.style.display = "none"
    var elEditor = document.querySelector('.the-editor')
    elEditor.style.display = "flex"
    var canvas = document.getElementById('my-canvas');
    canvas.style.display = "block"
}

function onClickGalleryButton(){
    var elEditor = document.querySelector('.the-editor')
    elEditor.style.display = "none"
    var elClickedImg = document.querySelector('.gallery-container')
    elClickedImg.style.display = "grid"
    var elSerachBar = document.querySelector('.search-box')
    elSerachBar.style.display = "block"
    var canvas = document.getElementById('my-canvas');
    canvas.style.display = "none"
}

