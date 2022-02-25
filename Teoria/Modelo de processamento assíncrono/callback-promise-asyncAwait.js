//callback > promise > async/await

console.log(1);
console.log(2);
mostraSoma(soma());
console.log(3);
/*output: 1 2 3 Mensagem após 2 segundos*/

function soma(){
    return 5;
}

function mostraSoma(callback){
    console.log(callback);
}