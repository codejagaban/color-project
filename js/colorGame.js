// creates an Array of colors
var numSquares = 6;
var colors = [];
var pickedColor;
// gets elements from the DOM Tree
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButton = document.querySelectorAll(".mode");

init();

function init() {

        setUpModeButtons();
        setUpSquares();
        reset();

};

function setUpModeButtons() {
    // mode buttons event listeners
    for(i = 0; i < modeButton.length; i++){
        modeButton[i].addEventListener("click", function () {
            modeButton[0].classList.remove('selected');
            modeButton[1].classList.remove('selected');
            this.classList.add("selected");
                // figure out how many squares to show
            this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;
            reset();
        });
    };
    
}

function setUpSquares() {
     // Squares set up
     for(var i = 0; i < squares.length; i++) {
        // add click listeners to each of the squares
        squares[i].addEventListener("click", function(){
        // grab color of clicked square
        var clickedColor =  this.style.backgroundColor;
        // compare color to pickedColor
        if (clickedColor === pickedColor) {
            messageDisplay.textContent = "Correct!";
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
}

function reset(){
     // generate all new colors 
     colors = generateRandomColors(numSquares);
    // generate a new random color from the array
    pickedColor = pickColor();

    // change the colorDisplay to match the pickedColor
    colorDisplay.textContent = pickedColor;
    resetButton.textContent = "New Colors";
    messageDisplay.textContent = "";

    // change the colors of the squares
    for(i = 0; i < squares.length; i++){
        
        if (colors[i]) {
            
            squares[i].style.display = "block"; 
            squares[i].style.backgroundColor = colors[i];
            
        } else {
            squares[i].style.display = "none"; 
            
        }
        h1.style.backgroundColor = "#4682b4";


    }
};




//  resets the game and give a new random colors
resetButton.addEventListener("click", function(){
  reset();
});



colorDisplay.textContent = pickedColor;


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