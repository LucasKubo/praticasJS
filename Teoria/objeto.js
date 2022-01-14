//Conceitos de Objetos em Js
var pessoa = {
    //Strings podem ser representadas com "", '' ou ``

    //É possível criar um objeto dentro de outro objeto
    nome: {primeiro: 'Lucas', sobrenome: 'Kubo'},
    idade: 19,
    filmesFavoritos: ['Os vingadores', 'Matrix'],

    //Também é possível adicionar métodos, porém não pode ser arrow function pois só funciona em tempo de execução
    apresentar: function (){
        //Utilizando template String
        console.log(`Olá ! Meu nome é ${pessoa.nome}`);
        //Output: Olá ! Meu nome é Lucas
    }
};

//Adicionando e atributo com valor ao Objeto
pessoa.altura = 1.80;
//Acessando valores do objeto
console.log(pessoa.nome.primeiro);
console.log(pessoa['nome'].primeiro);
//Output: Lucas

//Usando desestruturação
//Os atributos são respectivamente atribuídos
const {nome, idade, ...outros} = pessoa;