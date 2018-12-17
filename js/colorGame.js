// creates an Array of colors
var numSquares = 6;
var colors = generateRandomColors(numSquares);
var pickedColor = pickColor();
// gets elements from the DOM Tree
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");



// select the easy level game
easyBtn.addEventListener("click", function(){
    easyBtn.classList.add("selected");
    hardBtn.classList.remove("selected");
    numSquares = 3;

    // generate a random set of 3 new colors
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i = 0; i < squares.length; i++){
        if (colors[i]) {
            squares[i].style.backgroundColor = colors[i];
            
        } else {
            squares[i].style.display = "none"
            
        }

    }
    
    

});



// selects the hard level game

hardBtn.addEventListener("click", function(){
    hardBtn.classList.add("selected");
    easyBtn.classList.remove("selected");
        // generate all new colors 
        numSquares = 6;
        colors = generateRandomColors(numSquares);
        pickedColor = pickColor();
        colorDisplay.textContent = pickedColor;
        for(var i = 0; i < squares.length; i++){
                squares[i].style.backgroundColor = colors[i];
                squares[i].style.display = "block";
    
        }

    

});



//  resets the game and give a new random colors
resetButton.addEventListener("click", function(){
    // generate all new colors 
     colors = generateRandomColors(numSquares);
    // generate a new random color from the array
    pickedColor = pickColor();

    // change the colorDisplay to match the pickedColor
    colorDisplay.textContent = pickedColor;

    // change the colors of the squares
    for(i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = colors[i];
        h1.style.backgroundColor = "#232323"

    }

    // change the colors from the squares of the page to the Arrays colors
   
});
//0701 939 1997



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
            h1.style.backgroundColor = clickedColor;
            resetButton.textContent = "Play Again?"
            
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