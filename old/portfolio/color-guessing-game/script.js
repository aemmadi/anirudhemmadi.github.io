var numSquares = 6;
var colors = randomColorArray(numSquares);
var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");
var correctColor = randomPickColor();

init();

function init(){
  setModeButtons();
  setSquares();
  reset();
}

function setModeButtons(){
  for (var i = 0; i < modeButtons.length; i++) {
    modeButtons[i].addEventListener("click", function(){
      modeButtons[0].classList.remove("selected");
      modeButtons[1].classList.remove("selected");
      this.classList.add("selected");
      if(this.textContent == "Easy"){
        numSquares = 3;
      }else{
        numSquares = 6;
      }
      reset();
    });
  }
}

function setSquares(){
  for(var i = 0; i < squares.length; i++){
    squares[i].addEventListener("click", function(){
      var clickedColor = this.style.backgroundColor;
      if(clickedColor === correctColor){
        messageDisplay.textContent = "Correct";
        resetButton.textContent = "Play Again?";
        changeColor(correctColor);
        h1.style.backgroundColor = correctColor;
      }else{
        this.style.backgroundColor = "#232323";
        messageDisplay.textContent = "Try Again";
      }
    });
  }
}

function reset(){
  colors = randomColorArray(numSquares);
  correctColor = randomPickColor();
  colorDisplay.textContent = correctColor;
  resetButton.textContent = "New Colors";
  messageDisplay.textContent = " ";
  for (var i = 0; i < squares.length; i++) {
    if(colors[i]){
      squares[i].style.display = "block";
      squares[i].style.backgroundColor = colors[i];
    }else{
      squares[i].style.display = "none";
    }
  }
  h1.style.backgroundColor = "steelblue";
}

resetButton.addEventListener("click", function(){
  reset();
});

function changeColor(color){
  for(var i = 0; i < squares.length; i++){
    squares[i].style.backgroundColor = color;
  }
}

function randomPickColor(){
  var randomNumber = Math.floor(Math.random() * colors.length);
  return colors[randomNumber];
}

function randomColorArray(num){
  var colorArray = [];
  for (var i = 0; i < num; i++) {
    colorArray.push(randomColor());
  }
  return colorArray;
}

function randomColor(){
  var red = Math.floor(Math.random() * 256);
  var green = Math.floor(Math.random() * 256);
  var blue = Math.floor(Math.random() * 256);
  return "rgb(" + red + "," + " " + green + "," + " " + blue + ")";
}
