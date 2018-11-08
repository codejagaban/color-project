// creates an Array of colors
var colors = generateRandomColors(6),
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

function generateRandomColors(num){
    // make an array
    var arr = []

    // add num random colors to the array

    // repeat num times
    for(i=0; i < num; i++) {
        // get random color and push into arr
        arr.push(randomColor())

    }
    // returen that array
    return arr;
}
function randomColor(){
    // pick a red  from 0 - 255
    var r = Math.floor(Math.random() * 256);
    // pick a green  from 0 - 255
    
    var g = Math.floor(Math.random() * 256);
    // pick a blue  from 0 - 255
    
    var b = Math.floor(Math.random() * 256);
     return "rgb(" + r + ", " + g + ", " + b + ")";

    
}