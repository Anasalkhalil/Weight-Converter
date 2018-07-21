document.getElementById('lbsInput').addEventListener('keyup',convert);
document.getElementById('output').style.visibility = 'hidden';
const pound = document.getElementById('lbsInput');
const grams = document.getElementById('gramsOutput');
const kiloGrams = document.getElementById('KilogramsOutput');
const ounces = document.getElementById('ozOutput');


function convert(e){
    document.getElementById('output').style.visibility = '';
    var pounds = pound.value;
    grams.innerHTML = pounds / 0.0022046;
    kiloGrams.innerHTML = pounds / 2.2046;
    ounces.innerHTML = pounds *16;
}
