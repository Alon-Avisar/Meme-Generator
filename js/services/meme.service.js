'use strict';

let gMeme = {
    // i can choose a image by the id and to show it on the canvas
    selectedImgId: 1,
    // the choosen line from all the lines array - > gMeme.lines[0].txt / gMeme.lines[0].size /gMeme.lines[0].align /gMeme.lines[0].color
    // and in the end the user can change the txt , the size , the align and the color!!
    selectedLineIdx: -1,
    lines: []
}

//Add a memeService with a gMeme variable and a function getMeme(), the
//function renderMeme() can now render that meme
function getMeme() {
    return gImgs.find(img => img.id == gMeme.selectedImgId)
}

//Add a text input and when it changed by the user –
//a. update the gMeme using the memeService function setLineTxt()
//b. then renderMeme()
function setLineTxt() {
    gMeme.selectedLineIdx++
    var elUserText = document.querySelector('.user-text')
    gMeme.lines.push({ 
        text: elUserText.value,
        color: 'white',
        fontSize: 40,
        font: 'arial',
        fontWeight: 'bold',
        position: {x: 275, y: 275},
        align: 'center',
        strokeColor: 'black',
    })
    elUserText.value = '';
    renderCanvasElements()
}

function setImg() {
    onImgSelect()
}

