'use strict';

// Those for the editor!
function colorSelected(theColor) {
    if(gMeme.lines.length) {
        gMeme.lines[gMeme.selectedLineIdx].color = theColor
        renderCanvasElements()
    }
}
function onDecreaseFontSize() {
    if(gMeme.lines.length) {
        gMeme.lines[gMeme.selectedLineIdx].fontSize = gMeme.lines[gMeme.selectedLineIdx].fontSize-5
        renderCanvasElements()
    }
 
}
function onIncreaseFontSize() {
    if(gMeme.lines.length) {
        gMeme.lines[gMeme.selectedLineIdx].fontSize = gMeme.lines[gMeme.selectedLineIdx].fontSize+5
        renderCanvasElements()
    }
}
function onAlignCenter(){
    if(gMeme.lines.length) {
        gMeme.lines[gMeme.selectedLineIdx].position.x = 275
        renderCanvasElements()
    }
}
function onAlignLeft(){
    if(gMeme.lines.length) {
        gMeme.lines[gMeme.selectedLineIdx].position.x = 50
        renderCanvasElements()
    }
}
function onAlignRight(){
    if(gMeme.lines.length) {
        gMeme.lines[gMeme.selectedLineIdx].position.x = 500
        renderCanvasElements()
    }
}

// ${gMeme.lines[0].txt} / ${gMeme.lines[0].size} /${gMeme.lines[0].align} /${gMeme.lines[0].color} 
function onTextInput(){
    setLineTxt()
    selectTextLine()
}

function onDeleteLine() {
    if(gMeme.lines.length) {
        gMeme.lines =  gMeme.lines.filter((line ,index) => gMeme.selectedLineIdx !== index)
        gMeme.selectedLineIdx = gMeme.lines.length - 1
        selectTextLine()
    }
}

function onColorSelected(theColor) {
    if(gMeme.lines.length) {
        gMeme.lines[gMeme.selectedLineIdx].color = theColor    
        renderCanvasElements()
    }
}

function selectTextLine(operation) {
    if (operation === 'up') {
        gMeme.selectedLineIdx === gMeme.lines.length - 1 ? gMeme.selectedLineIdx = 0 : gMeme.selectedLineIdx++; 
    } else if (operation === 'down') {
        gMeme.selectedLineIdx === 0 ? gMeme.lines.length - 1 : gMeme.selectedLineIdx--; 
    }  
    gMeme.lines.forEach(line => {
        line.strokeColor = 'black'
    });
    gMeme.lines[gMeme.selectedLineIdx].strokeColor = 'red';
    renderCanvasElements()
}


