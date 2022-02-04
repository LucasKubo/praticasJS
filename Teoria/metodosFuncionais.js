let array = ['Lucas', 10, true, 5.0];

//Utilizando Filter --> Retorna um novo Array só com os elementos que passaram na condição implementada (não modifica o Array original)
let arrayString = array.filter((elemento) => {
    if (typeof elemento === 'string') {
        return elemento;
    }
});
console.log(arrayString); //Retorno esperado: [ 'Lucas' ]

//Utilizando Map --> Retorna um Array com os elementos processados de acordo com o que foi implementado na função dentro do Map (não modifica o Array original)
let arrayDouble = array.map((elemento) => {
    if (typeof elemento === 'number') {
        return elemento * 2;
    }else{
        return elemento;
    }
});
console.log(arrayDouble); //Retorno esperado: [ 'Lucas', 20, true, 10 ]

//Utilizando Find --> Retorna apenas o primeiro valor(não é Array) que passar pela condição implementada (não modifica o Array original)
let arrayFirstNumber = array.find((e)=>{
    if(typeof e === 'number'){
        return e;
    }
})
console.log(arrayFirstNumber); //Retorno esperado: 10

//Utilizando Reduce --> Retorna os valores de maneira reduzida. Exemplo -> soma todos elementos do array em um só
let arrayReduce = array.reduce((acumulador,e)=>{
    return acumulador + e; //acumulador -> mantém o valor salvo a cada iteração ;e -> percorre por todos os elementos do Array
})
console.log(arrayReduce); // Retorno esperado: Lucas10true5 (String concatenada)