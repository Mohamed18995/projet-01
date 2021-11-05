/*

 * Soit une application permettant de compter les occurrences de chaque lettre dans une
 * chaîne de caractères fournie par l’utilisateur.
 * Pour atteindre le seuil minimal de réussite, vous répondrez aux trois points suivants :
 * 1. Cette chaîne de caractères devra avoir une longueur totale comprise entre 20 et 100
 *    caractères
 * 2. Vous devez afficher les trois caractères qui apparaissent le plus souvent (s’il y en a
 *    plusieurs à égalité, vous les afficherez tous) ainsi que le nombre de leurs occurrences
 *    respectives
 * 3. Vous afficherez également la moyenne de ce « top 3 »
 *    Pour déterminer le degré de maîtrise :
 * 4. Vous afficherez les occurrences sous forme de bargraphes dans la console. Une
 *    étoile pour 5 occurrences. Exemple d'affichage :
 *    |00|10|20|30|40|
 *    A|**|* | | | | // Occurrence = 16
 *    B|* | | | | | // Occurrence = 7
 *    C|**|**|**|* | | // Occurrence = 38
 *    D| | | | | | // Occurrence = 3
 *    E|**|**| | | | // Occurrence = 21
 
*/
let chaine = "";

let sorted = [];
let resultat = [];

let maxKey_1 = "";
let errorTxt = "";
let moyen= 0;

let i = 0;
let j = 1;
let isDone = 0;

const MIN = 20;
const MAX = 100;

do{
    chaine =prompt(errorTxt + ('Veuillez entrer une chaîne de caractères entre ' + MIN + ' et ' + MAX + ' caractères '));
    errorTxt = "ERREUR\n***********\n";
}while(chaine.length <= MIN || chaine.length >= MAX);

let chaineCounts = [];

for(let i = 0; i < chaine.length; i++){
    let key = chaine[i];
    
    if(!chaineCounts[key]){
     chaineCounts[key] = 0;
    }
    chaineCounts[key]++;
    if(maxKey_1 == '' || chaineCounts[key] > chaineCounts[maxKey_1]){
        maxKey_1 = key;
    }
}

for (var [key, value] of Object.entries(chaineCounts)) {
    sorted.push([key , value]);
}

sorted.sort((a,b)=> {
    return b[1] - a[1];
} );



do {

    resultat[resultat.length] = sorted[i];
    if(j < sorted.length && sorted[i][1] != sorted[j][1]){ 
        isDone++;
    }
    i++;
    if (j < sorted.length) {
        j++;
    }

} while( isDone < 3 && resultat.length  < sorted.length)


let msg = "";
resultat.map(tab =>{
    moyen += tab[1];

    msg += "Le letter qui apparu plu souveant est " + tab[0] + " est apparu " + tab[1] + " fois \n";
})

msg += "le moyen est " + (moyen / resultat.length).toFixed(2);


let msg2 = "";

resultat.map(tab => {
    msg2 += tab[0] + "|"
    for (let i = 1; i <= tab[1] / 5; i++){
        msg2 += "*";
        if(i % 2 === 0){
            msg2 += "|";
        }
    }
    msg2 += "\n"

})

console.log(msg2);

console.log(moyen / resultat.length);

console.log(msg);

console.log(resultat);



