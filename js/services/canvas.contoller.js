'use strict'

var gElCanvas;
var gCtx;
var gCurrShape = 'triangle';
var gFillColor = 'blue'

function renderCanvas() {
    gElCanvas = document.querySelector('#my-canvas');
    gCtx = gElCanvas.getContext('2d');
    renderCanvasElements()
    // drawImg(getMeme().src)
}

function renderCanvasElements() {
    clearCanvas();
    drawImg(getMeme().src)
    gMeme.lines.map((line) => {
        drawText(line)
    })
}

function clearCanvas() {
    gCtx.clearRect(0, 0, gElCanvas.width, gElCanvas.height);
}

function drawText(line) {
    gCtx.beginPath()
    gCtx.textBaseline = 'middle';
    gCtx.textAlign = line.align;
    gCtx.lineWidth = 1;
    gCtx.font = `${line.fontSize}px ${line.font}`;
    gCtx.fillStyle = line.color;
    gCtx.fillText(line.text,line.position.x, line.position.y);
    gCtx.strokeStyle = line.strokeColor;
    gCtx.strokeText(line.text, line.position.x, line.position.y);
    gCtx.closePath()
}

function onDeleteRow(){
    gMeme.lines[gMeme.selectedLineIdx]
    gMeme.lines.splice(gMeme.selectedLineIdx,1)
    renderCanvasElements()
}

function drawImg(imgSrc) {
    const img = new Image();
    img.src = imgSrc;
    gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height);
}

function setShape(shape) {
    gCurrShape = shape;
}

function draw(ev) {
    const { offsetX, offsetY } = ev
        console.log(offsetX, offsetY)
    switch (gCurrShape) {
        case 'text':
            drawText('שלום', offsetX, offsetY);
            break;
    }
}

function downloadCanvas(elLink) {
    const data = gElCanvas.toDataURL();
    elLink.href = data;
    elLink.download = 'my-canvas';
}


