function playSound(e){
        let key = e.code;
    
        const audio = document.querySelector(`audio[data-key="${key}"`);
        if (!audio) return;
        audio.currentTime = 0;
        audio.play();
        const letter = document.querySelector(`.key[data-key="${key}"`);
        letter.classList.add('playing');
    
}

window.addEventListener("keydown", playSound);

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

function removeTransition(e){
    if (e.propertyName !== 'transform') return;
    this.classList.remove('playing');
}