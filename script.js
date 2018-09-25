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

