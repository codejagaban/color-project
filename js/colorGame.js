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
pickedColor = colors[3],
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
            alert("CORRECT")
            
        } else {
            this.style.backgroundColor = "#232323"
            
        }
    })


}