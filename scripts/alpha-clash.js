// function play(){
//     // step:1--hide the home page and start game page
//     const homeSection =document.getElementById('home-screen');

//     homeSection.classList.add('hidden');


//     // show the playground
//     const playGround=document.getElementById('play-ground');

//     playGround.classList.remove('hidden');
    
// }

function continueGame(){
    // generate alphabet

    const alphabet=getRandomAlphabet();

    // set alphabet
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText=alphabet;

    // set background colour

    setBackgroundColourById(alphabet);
}

function play(){
    hideElement('home-screen');
    showElement('play-ground');
    continueGame();
}

