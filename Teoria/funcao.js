/*conceitos de funcoes em Js */

//Mesmo chamando a função antes de cria-la, o código vai rodar
nomeFunc()
function nomeFunc(){
    console.log("Olá Mundo");
    //Output: Olá Mundo
}

//Função anônima (função sem nome)
var funcaoAnonima1 = function(){
    console.log("Função anônima");
}
var funcaoAnonima2 = () =>{
    console.log("Função com Arrow Function");
}

//CallBack -> passar uma função como parâmetro de outra função (A função é executada e o seu retorno é o valor do parâmetro)
function valor2(){
    return 2;
}
function callBack (funcao){
    return funcao * 2;
}

console.log(callBack(valor2()));
//Output: 4