var numOfDrum = document.querySelectorAll(".drum").length;
var audio = new Audio("sounds/tom-1.mp3");
for (var i = 0; i < numOfDrum; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function() {
    makeSound(this.innerHTML);
    buttonAnimation(this.innerHTML);
  });

}

document.addEventListener("keydown", function(event) {
  if (makeSound(event.key)) {
    buttonAnimation(event.key);
  }  
});


function makeSound(key) {
  switch (key) {
    case "w":
      var audio = new Audio("sounds/tom-1.mp3");
      audio.play();
      return true;

    case "a":
      var audio = new Audio("sounds/tom-2.mp3");
      audio.play();
      return true;

    case "s":
      var audio = new Audio("sounds/tom-3.mp3");
      audio.play();
      return true;

    case "d":
      var audio = new Audio("sounds/tom-4.mp3");
      audio.play();
      return true;

    case "j":
      var audio = new Audio("sounds/snare.mp3");
      audio.play();
      return true;

    case "k":
      var audio = new Audio("sounds/crash.mp3");
      audio.play();
      return true;

    case "l":
      var audio = new Audio("sounds/kick-bass.mp3");
      audio.play();
      return true;

    default: console.log("Not valid key: " + key); return false;
  }
}

function buttonAnimation(key) {
  var activeButton = document.querySelector("." + key);
  activeButton.classList.add("pressed");
  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);
}
