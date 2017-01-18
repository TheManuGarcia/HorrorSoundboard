function removeTransition (pressedKey){
    if(pressedKey.propertyName !=='transform') return; //skips if it's not a transition
    pressedKey.target.classList.remove('playing'); // removes the css class of playing
}

function playEffect(pressedKey){

    const audio = document.querySelector(`audio[data-key="${pressedKey.keyCode}"]`); // Select audio element
    const key = document.querySelector(`.key[data-key="${pressedKey.keyCode}"]`); // Select key element with class of .key

    if(!audio) return; //Stop function from running if a  key with no audio has been pressed
    key.classList.add('playing');  //add class of playing, which is located in styles.css to our key element
    audio.currentTime = 0; //Rewind audio
    audio.play();

}


const keys = document.querySelectorAll('.key'); //Select all the elements with the .key class

// => function is a ES6 function
keys.forEach(key => key.addEventListener('transitionend', removeTransition)); // transitionend is an EventListener, when it ends we add the function removeTransition

window.addEventListener('keydown', playEffect); // keydown is an EventListener
