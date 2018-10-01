let ex1 = document.querySelector('.bloco1');
let ex2 = document.querySelector('.bloco2');
let ex3 = document.querySelector('.bloco3');
let ex4 = document.querySelector('.bloco4');


ex1.onclick = exer1;
ex2.onclick = exer2;
ex3.onclick = exer3;
ex4.onclick = exer4;

function exer1 (){
    let idade = Number(prompt("Digite Sua Idade"));
    let salario = Number(prompt("Digite sua renda"));
    let emprestimo = Number(prompt("Quanto você quer de emprestimo"));

    if (idade < 21 || idade > 55 || salario < 1000 || emprestimo < 500 || emprestimo > salario * 15) {
    alert("Emprestimo Negado");

}
    else {
        alert("Emprestimo Aprovado");
        let parcelas = Number(prompt("Digite a quantidade de parcelas que deseja"));
        let total = emprestimo * (1 + 0.085) ** parcelas;
        if (parcelas < 3 || parcelas > 24) {
            alert("Parcelamos apenas entre 3 e 24 vezes");

        }
        else {     
            alert(`Você deverá pagar o total de R$${total.toFixed(2)} divido em ${parcelas} parcelas de R$${(total / parcelas).toFixed(2)}`);
            }
        }
}

function exer2 (){
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
}

function exer3 (){
    let numero = Number(prompt("Quantos Degraus Você Quer?"));
    let caracter = prompt("Digite o simbolo que deseja usar");
    let i = 1;
    let escada = caracter;

    while(i <= numero){
     console.log(escada);
     escada += caracter;
     i++;
    }
}

function exer4(){
    let boys = ["Rosefranio", "Cleuso", "Amansovaldo", "Odeilson"];
    let girls = ["Variscleusa", "Neusailde", "Nildete", "Diadete"];
    let i = 0;
    let j = 1;

    while(i < boys.length){
     let k = 0;

    while(k < girls.length){
          console.log(`Casal ${j}: ${boys[i]} e ${girls[k]}`);
          j++;
          k++;
     }
     i++;
}

console.log("Fim!");
}





