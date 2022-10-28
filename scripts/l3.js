var gameBox = document.querySelectorAll(".box");
var gamePlaces = [1, 1, 1, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
console.log(gamePlaces.length)
var input = document.getElementById("input-box");
var startBtn = document.getElementById("start-btn");
var chances = document.getElementById("chances");
var remGifts = document.getElementById("gifts-rem");
// console.log(gameBox);

function startTheGame(){
   gamePlaces = gamePlaces.sort((a, b) => 0.5 - Math.random());
   giftsLeft = 3, count = 0;
}

var giftsLeft = 3, count = 0;

startBtn.addEventListener("click", function(){
   
   if(count == 0){
      // For shuffling The array(Game Places)
      for(let i=0; i<5; i++) gamePlaces = gamePlaces.sort((a, b) => 0.5 - Math.random());
      console.log(gamePlaces);
      console.log("Im working");
   }
   var row = (input.value.charCodeAt(0) - 65);
   var col = input.value[1];

   if(row > 6 || col > 6){
      alert("Enter the correct input :");
      alert("Row should be in between A & C, Column should be in between 1  to 3")
   }
   else{
      var index = Number(row*6) + Number(col) - 1;
      console.log(gamePlaces);
   
      count++;
      chances.innerHTML = count;
      gameBox[index].classList.add("flip");
      if(gamePlaces[index] == 1){
         setTimeout(function(){
            gameBox[index].children[0].innerHTML = "🎁";
         }, 500);
         giftsLeft--;
         remGifts.innerHTML = giftsLeft;
         if(giftsLeft == 0){
            // Won the game
            window.location = "win.html";
            // alert()
         }
      }
      else if(gamePlaces[index] == 0){
         setTimeout(function(){
            gameBox[index].children[0].innerHTML = "❌";
         }, 500);
         
      }
      else{
         setTimeout(function(){
            gameBox[index].children[0].innerHTML = "💣";
            window.location = "game-over.html";
         }, 500);
      }
   }
});