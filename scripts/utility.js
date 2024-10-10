function hideElement(elementId){
    const element=document.getElementById(elementId);
    element.classList.add('hidden');

}

function showElement(elementId){
    const element =document.getElementById(elementId);
    element.classList.remove('hidden');
}

// add background color
function setBackgroundColourById(elementId){
    const element =document.getElementById(elementId);
    element.classList.add('bg-orange-400');

}
// remove background color
function removeBackgroundColor(elementId){
    const element =document.getElementById(elementId);
    element.classList.remove('bg-orange-400');
}

// alphabet 

function getRandomAlphabet(){
    // alphabet array creation
    const alphabetString='abcdefghijklmnopqrstuvwxyz';
    const alphabets= alphabetString.split('');

    // random index between 0-25
    const randomNumber= Math.random()*25;
    const index =Math.round(randomNumber);
    

    const alphabet = alphabets[index];
    console.log(index,alphabet);
    return alphabet;




}