let word = "bonjour"

/*
//let newWord = word.replace(/our/, 'ur');

//let newWord = word.replace(/o/,'')
//let bonjur = word + (word[4]='R');
// let tableau = word.split("")

tableau.splice(4, 1)

console.log(tableau)
let wordFinal ="";

for (let i = 0; i < tableau.length; i++) {
    wordFinal = wordFinal + tableau[i]
}
console.log(wordFinal);

*/

/*

const monParagraphe = document.querySelector(".rouge")

function changerCouleur (){
    monParagraphe.classList.toggle("bleu")
}
setInterval(changerCouleur, 1000)

*/







/*

let allBonjour = ['Bonjour', 'coucou', 'hello', 'salut', 'hola'];

function changementDeMot(mot){
    monParagraphe.textContent = mot;
}

for (let i = 0; i < allBonjour.length; i++) {
    mot = parcourVecteur(i);
    monParagraphe.textContent = mot;
}

function parcourVecteur(j){
    setTimeout( function ()
    {
        let mot = allBonjour[j];
        changementDeMot(mot)
        console.log(mot);
    },1000*j)
}

var delayInMilliseconds = 1000; //1 second

setTimeout(function() {
    //your code to be executed after 1 second
}, delayInMilliseconds);

*/

let unePhrase = "Le doux dos dodu du dindon farci se dandinait doucement";
let motInterdit = 'dindon';


let tableau = unePhrase.split(" ")
console.log(tableau)

for (let i = 0; i < tableau.length; i++) {
    console.log(tableau[i]);
    TableauAvecMotAVerifier = unePhrase.split(" ")
    let nouvP = document.createElement("p");
    if (tableau[i]==motInterdit){tableau[i]='poulet'}
    nouvP.textContent =tableau[i]
    if (i%2==0){
        nouvP.classList.add("rouge")}
    else{
        nouvP.classList.add("vert")
    }

    document.body.appendChild(nouvP)

}

const tableauParagraphesVert = document.querySelectorAll(".vert")
console.log(tableauParagraphesVert)

function changerCouleurVertBlack (){
    for (let i = 0; i < tableauParagraphesVert.length; i++) {
        tableauParagraphesVert[i].classList.toggle("black")
    }

}
setInterval(changerCouleurVertBlack, 1300)


const tableauParagraphesRouge = document.querySelectorAll(".rouge")
console.log(tableauParagraphesRouge)

function changerCouleurBleuRouge (){
    for (let i = 0; i < tableauParagraphesRouge.length; i++) {
        tableauParagraphesRouge[i].classList.toggle("bleu")
    }

}
setInterval(changerCouleurBleuRouge, 1000)
