let termoUm = 0
let termoDois = 1
let valoratual = 0;

console.log(termoUm); //0 1 1
console.log(termoDois);// 1 1 2

for (let i = 0; i < 8; i++){
    valoratual = termoUm + termoDois; // 1 2 3
    console.log(valoratual) //1 2 
    termoUm = termoDois;// 1 1
    termoDois = valoratual; //1 2
}