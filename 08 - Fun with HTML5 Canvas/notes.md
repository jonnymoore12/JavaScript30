## Canvas Drawing

Set up a canvas in the html:
```
<canvas id="draw" width="800" height="800">
```
Get hold of your canvas:
```
const canvas = document.querySelector('#draw');
```
And set up a 2d drawing context on the canvas:
```
const ctx = canvas.getContext('2d');
```
Here are the functions used to draw on the canvas:
```
ctx.beginPath();
// Start point:
ctx.moveTo(endX, endY);
// End point:
ctx.lineTo(event.offsetX, event.offsetY);
ctx.stroke();
```
On mousedown, set endX and endY equal to mouse's current position (event.offsetX, event.offsetY) so we can start drawing a new line from the current position. Draw the line to the current mouse position, hence ctx.lineTo(event.offsetX, event.offsetY).
