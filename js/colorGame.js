// creates an Array of colors
var colors = [
    "rgb(255, 0, 0)",
    "rgb(255, 255, 0)",
    "rgb(0, 255, 0)",
    "rgb(0, 255, 255)",
    "rgb(0, 0, 255)",
    "rgb(255, 0, 255)"
],

// gets elements from the DOM Tree
squares = document.querySelectorAll(".square"),
colorDisplay = document.getElementById("colorDisplay");
messageDisplay = document.querySelector("#message");
pickedColor = pickColor(),
colorDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; i++) {

    // add initial colors to each of the squares
    squares[i].style.backgroundColor = colors[i];

    // add click listeners to each of the squares
    squares[i].addEventListener("click", function(){
        // grab color of clicked square
        var clickedColor =  this.style.backgroundColor;

        // compare color to pickedColor
        if (clickedColor === pickedColor) {
            messageDisplay.textContent = "Correct";
            changeColors(clickedColor);
            
            // if the picked color is not the same as the clicked color

        } else {
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try Again";
            
        }
    });
}
function changeColors(color) {
    // loop through all the squares
    for(i=0; i< squares.length; i++){
        // change each color to match the given color
        squares[i].style.backgroundColor = color;

    }
}
// pick a random color from the array of colors
function pickColor() {
   var random = Math.floor(Math.random() * colors.length)
   return colors[random];
    
}