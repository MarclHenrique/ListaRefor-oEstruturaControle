let prompt = require('prompt-sync')();

let numero = Number(prompt("Digite um número: "));
let contador = 0;

for(let i = 1; i <= numero; i++){
    
    if(numero % i === 0){
        contador++;
    }

}
contador > 2 ? console.log(`${numero} não é primo`) : console.log(`${numero} é primo`)

    // if (contador > 2){
    //     console.log("Numero Primo");
        
    // }else{
    //     console.log(`Número ${numero} não é primo`);
        
    // }
    


