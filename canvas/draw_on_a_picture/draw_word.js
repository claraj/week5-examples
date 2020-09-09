//Find canvas, create a context
let canvas = document.querySelector('#canvas')
let context = canvas.getContext('2d')

//Find input box and disable it until canvas is ready
let input = document.querySelector('#image_text')
input.disabled = true

// Drawing the image - create an image and set the source 
// add callback to know when the image is loaded and ready, 
// so can draw it to the canvas and enable the input
let image = new Image()
image.src = 'cat.jpg'

image.addEventListener('load', function () {
    context.drawImage(image, 0, 0)
    input.disabled = false
})

// Add event listener to input - will fire if the text is changed
input.addEventListener('input', function() {
    // Read the data typed in the input
    // 'this' is the HTML element this event listener function is called for 
    let text = this.value

    context.drawImage(image, 0, 0)  // Redraw the image, no way to clear text 
    context.font = '30px Arial'      // Set font
    context.fillStyle = 'darkblue'   // Set color
    context.fillText(text, 30, 100)    // And draw text.
})


