//O import da classe Pessoa pode ser definido com outro nome, nesse caso: PessoaImportada
import PessoaImportada from './Pessoa.js';
//O import deve ter o mesmo nome do que eu quero importar. Contudo, é possível utilizar o 'as'
import {mostrarIdade as idadePessoa, mostrarNome as nomePessoa} from './Pessoa.js';

let p = new PessoaImportada("Lucas", 20);
console.log(p);// Pessoa { nome: 'Lucas', idade: 20 }
idadePessoa(p);//20
nomePessoa(p);//Lucas