// for (let i=0; i>5; i++){
//     let degrau = '#';
//     console.log= (escada);
//     degrau+='#';
//  }

//  let escada= prompt ('Qual o material?');
//  let quant= Number (prompt ('quantos degraus'));
//  let material= escada;
//  let cont= 0;

//  while (cont< quant){
//      console.log(escada);
//      escada+= material;
//      cont ++;
//  }
// assinatura da função:
// function somar(a, b){ 
//     return Number (a+b)
// }
// console.log(somar(2,4));

function parOuInpar(a){
    if( a % 2 == 0){
        return 'É par';
    }   return 'É impar';
}

const aleatorio= function (min, max){
    return Math.floor(Math.random()*(max - min +1) ) + min;
}