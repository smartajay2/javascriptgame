
// game
var inputbox=document.getElementById("inputbox")
var checkbox=document.getElementById("checkbox")
var result=document.getElementById("result")
var gusses=document.getElementById("gusses")
var noofguess=3
// Genarate random numbers

var randomnumber = Math.floor(Math.random()*10)+1

if (randomnumber>5){
  randomnumber=randomnumber-5
}

//even handler function 
function check(){

  if(inputbox.value==randomnumber)
  {
    alert("You got it right, congratu")
    result.textContent="you are right"
  }
  else
  {
    noofguess=noofguess-1
    if(noofguess==0){
      alert("you lost the random number is :"+randomnumber)
    }
    alert("you are wrong")
    gusses.textContent="Avilable Guess:"+noofguess
    result.textContent="you are wrong"
  
  }
}