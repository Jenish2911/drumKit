//Detecting ButtonPress
function sound(key){
    switch(key){
        case "a":
            var audio = new Audio('sounds/tom-1.mp3');
            audio.play();
            break;
        case "s":
            var audio = new Audio('sounds/tom-2.mp3');
            audio.play();
            break;
        case "d":
            var audio = new Audio('sounds/tom-3.mp3');
            audio.play();
            break;
        case "f":
            var audio = new Audio('sounds/tom-4.mp3');
            audio.play();
            break;
        case "g":
            var audio = new Audio('sounds/crash.mp3');
            audio.play();
            break;
        case "h":
            var audio = new Audio('sounds/snare.mp3');
            audio.play();            
            break;
        case "j":
            var audio = new Audio('sounds/kick-bass.mp3');
            audio.play();
            break;
        default:
            console.log(buttonInnerHTML);
    }
}

//Detecting KeyBoardPress
document.addEventListener("keydown",function(event){
    sound(event.key);
    animation(event.key);
});

for(var i=0;i<document.querySelectorAll(".drum").length; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function() {
        var buttonInnerHTML = this.innerHTML;
        sound(buttonInnerHTML);
        animation(buttonInnerHTML);
    });
}

function animation(currentKey){
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function(){
      activeButton.classList.remove("pressed");  
    },100);
}