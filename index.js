for(var i=0;i<document.querySelectorAll(".drum").length;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",handleClick);
}

function handleClick(){
    var buttonInnerHTML=this.innerHTML;
    buttonAnimation(buttonInnerHTML);
    makeSound(buttonInnerHTML);
    
}

document.addEventListener("keypress",function(event){
    makeSound(event.key)
    buttonAnimation(event.key)
})
function makeSound(key){
    switch(key){
        case "k":
            var tom1=new Audio("sounds/crash.mp3");
            tom1.play();
            break;

    case "l":
    var tom2=new Audio("sounds/kick-bass.mp3");
    tom2.play();
    break;

    case "j":
    var tom3=new Audio("sounds/snare.mp3");
    tom3.play();
    break;

    case "w":
    var tom4=new Audio("sounds/tom-1.mp3");
    tom4.play();
    break;

    case "a":
    var crash=new Audio("sounds/tom-2.mp3");
    crash.play();
    break;

    case "s":
    var kick=new Audio("sounds/tom-3.mp3");
    kick.play();
    break;

    case "d":
    var snare=new Audio("sounds/tom-4.mp3");
    snare.play();
    break;

    default:console.log(buttonInnerHTML);
    
    }
}
function buttonAnimation(currentKey){
    var active=document.querySelector("."+currentKey)
    active.classList.add("pressed");

    setTimeout(function(){
        active.classList.remove("pressed");
    },50)
}