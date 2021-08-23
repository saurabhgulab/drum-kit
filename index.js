
var numberOfButtons = document.querySelectorAll(".drum").length;

for(var i = 0; i< numberOfButtons; i++){
  document.querySelectorAll(".drum")[i].addEventListener("click",function(){
    var buttonInnerHTML= this.innerHTML;
    makeSound(buttonInnerHTML);
  });
}

document.addEventListener("keypress",function(){
  makeSound(event.key);
});


function makeSound(key){
  switch(key){

    case "w":
    var crash = new Audio("crash.mp3");
    crash.play();

    case "a":
    var kickbass = new Audio("kick-bass.mp3");
    kickbass.play();

    case "s":
    var snare = new Audio("snare.mp3");
    snare.play();

    case "d":
    var tom1 = new Audio("tom-1.mp3");
    tom1.play();

    case "j":
    var tom2 = new Audio("tom-2.mp3");
    tom2.play();

    case "k":
    var tom3 = new Audio("tom-3.mp3");
    tom3.play();

    case "l":
    var tom4 = new Audio("tom-4.mp3");
    tom4.play();

    break;

    default:
    console.log("Wrong Press");
  }
}

function buttonAnimation(currenKey){
  var activeButton = document.querySelector("."+currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function(){
    activeButton.classList.remove("pressed");
  },1000);
}
