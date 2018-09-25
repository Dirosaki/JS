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