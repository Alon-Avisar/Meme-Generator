'use strict';

// Those for the editor!
function colorSelected(theColor) {
    if (gMeme.lines.length) {
        gMeme.lines[gMeme.selectedLineIdx].color = theColor
        renderCanvasElements()
    }
}

function colorSelected(color) {
    gFillColor = color
}

function onDecreaseFontSize() {
    if (gMeme.lines.length) {
        gMeme.lines[gMeme.selectedLineIdx].fontSize = gMeme.lines[gMeme.selectedLineIdx].fontSize - 5
        renderCanvasElements()
    }

}
function onIncreaseFontSize() {
    if (gMeme.lines.length) {
        gMeme.lines[gMeme.selectedLineIdx].fontSize = gMeme.lines[gMeme.selectedLineIdx].fontSize + 5
        renderCanvasElements()
    }
}
function onAlignCenter() {
    if (gMeme.lines.length) {
        gMeme.lines[gMeme.selectedLineIdx].position.x = 275
        renderCanvasElements()
    }
}
function onAlignLeft() {
    if (gMeme.lines.length) {
        gMeme.lines[gMeme.selectedLineIdx].position.x = 50
        renderCanvasElements()
    }
}
function onAlignRight() {
    if (gMeme.lines.length) {
        gMeme.lines[gMeme.selectedLineIdx].position.x = 500
        renderCanvasElements()
    }
}

function onTextInput() {
    setLineTxt()
    selectTextLine()
}
