let word = "bonjour"

//let newWord = word.replace(/our/, 'ur');

//let newWord = word.replace(/o/,'')
//let bonjur = word + (word[4]='R');
let tableau = word.split("")

tableau.splice(4, 1)

console.log(tableau)
let wordFinal ="";

for (let i = 0; i < tableau.length; i++) {
    wordFinal = wordFinal + tableau[i]
}
console.log(wordFinal);






const monParagraphe = document.querySelector(".rouge")

function changerCouleur (){
    monParagraphe.classList.toggle("bleu")
}
setInterval(changerCouleur, 1000)
//setTimeout(changerCouleur,1000)


let allBonjour = ['Bonjour', 'coucou', 'hello', 'salut', 'hola'];

function changementDeMot(mot){
    monParagraphe.textContent = mot;
}


for (let i = 0; i < allBonjour.length; i++) {
    let mot = allBonjour[i];
    changementDeMot(mot)
    console.log(mot);
    clearTimeout(1000);
}