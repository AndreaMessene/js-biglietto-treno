const chilometri = prompt ('What is your chilometri?');
const eta = prompt ('What is your eta?');
let prezzoChilometro = '0.21';

let minorenni = ( eta < 18);

let maggiorenni = ( eta >= 18 && eta <= 65)

let over = ( eta > 65)

// costoBiglietto = costoBiglietto.toFixed(2);


let costoBiglietto;
let costoBiglietto2;
let costoBiglietto3;

if ( minorenni ) {
    costoBiglietto = ( chilometri * prezzoChilometro * 0.80 );


} else if ( maggiorenni ) {
    costoBiglietto2 = ( chilometri * prezzoChilometro );

} else if ( over ) {
    costoBiglietto3 = ( chilometri * prezzoChilometro * 0.60 );
}

console.log (`Your chilometri is ${chilometri} and your eta is ${eta} and your prezzo is ${costoBiglietto}`);

document.getElementById(`minorenni`).innerHTML = `<p>prezzo finale 18<h2> ${costoBiglietto} </h2></p>`;

document.getElementById(`maggiorenni`).innerHTML = `<p>prezzo finale 20<h2> ${costoBiglietto2} </h2></p>`;

document.getElementById(`over`).innerHTML = `<p>prezzo finale 65<h2> ${costoBiglietto3} </h2></p>`;



