// function play(){
//     // step:1--hide the home page and start game page
//     const homeSection =document.getElementById('home-screen');

//     homeSection.classList.add('hidden');


//     // show the playground
//     const playGround=document.getElementById('play-ground');

//     playGround.classList.remove('hidden');
    
// }

function handleKyboardPress(event){
    const playerPressed = event.key;

    // stop the game ove if prees ESC
    if(playerPressed==='Escape'){
        gameOver();
    }

    // get the expected to press
    const currentAlphabetElement= document.getElementById('current-alphabet');
    const currentAlphabet=currentAlphabetElement.innerText;
    const expectedAlphabet=currentAlphabet.toLowerCase();
// cheak right or wrong press
if(playerPressed===expectedAlphabet){
    console.log('you got a point')

    const currentScore=getTextElemenValuetById('current-score');
    const updatedScore=currentScore+1;
    setTextElementById('current-score',updatedScore);
   
   
    // update score
    // const currentScoreElement=document.getElementById('current-score');
    // const currentScoreText=currentScoreElement.innerText;
    // const currentScore=parseInt(currentScoreText);
    // // new score
    
    // // show the update score
    // currentScoreElement.innerText=newScore;


    removeBackgroundColor(expectedAlphabet);
    continueGame();
}
else{
    console.log('You got wrong point');
    const currentLife=getTextElemenValuetById('current-life');
    const updatedLife=currentLife-1;
    setTextElementById('current-life',updatedLife);

    if(updatedLife===0){
        gameOver();
    }

}
}

document.addEventListener('keyup',handleKyboardPress);

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
    hideElement('final-score');
    showElement('play-ground');
    // reset life
    setTextElementById('current-life',5);
    setTextElementById('current-score',0);

    continueGame();
}

function gameOver(){
    hideElement('play-ground');
    showElement('final-score');
    // update final score
    const lastScore=getTextElemenValuetById('current-score');
    setTextElementById('last-score',lastScore);

    // clear the last selected bg
    const currentAlphabet=getElementTextById('current-alphabet');
    removeBackgroundColorById(currentAlphabet);
}