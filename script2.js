let numero = Math.floor(Math.random() * 50 +1);
let palpite = Number(prompt("Digite um numero de 1 a 50"));

while(palpite !== numero){
     if(palpite > numero){
          alert("O numero é menor");
     }else{
          alert("O numero é maior")
     }
     palpite = Number(prompt("Tente Novamente"));
}

alert("Você acertou!!");