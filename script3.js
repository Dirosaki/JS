let numero = Number(prompt("Quantos Degraus Você Quer?"));
let caracter = prompt("Digite o simbolo que deseja usar");
let i = 1;
let escada = caracter;

while(i <= numero){
     console.log(escada);
     escada += caracter;
     i++;
}