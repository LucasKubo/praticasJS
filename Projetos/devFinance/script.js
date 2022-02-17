//Meios de interacao do usuario (botoes)
let botaoNovaTransacao = document.querySelector('#nova-transacao');
let modal = document.querySelector('.modal-overlay');
let botaoCancelar = document.querySelector('#button-cancelar');
let botaoSalvar = document.querySelector('#button-salvar');

//Abrindo modal para nova transacao
botaoNovaTransacao.addEventListener('click',() => {
    modal.className = 'modal-overlay active';
})

//fechando modal
botaoCancelar.addEventListener('click',() => {
    modal.className = 'modal-overlay';
})

//Selecionando inputs


let tabelaCorpo = document.querySelector('.tabela-corpo');

console.log(tabelaCorpo);
console.log(tabelaCorpo.children[0]);

botaoSalvar.addEventListener('click',adicionarLinha);

function adicionarLinha() {
    let descricaoInput = document.querySelector('#input-descricao').value;
    let valorInput = document.querySelector('#input-valor').value;
    let dataInput = document.querySelector('#input-data').value;

    let tr = document.createElement('tr');
    tr.className = 'tabela-corpo-linha';

    let tdDescricao = document.createElement('td');
    tdDescricao.className = 'tabela-corpo-descricao';
    let descricaoNova = document.createTextNode(descricaoInput);
    tdDescricao.appendChild(descricaoNova);

    let tdValor = document.createElement('td');
    tdValor.className = 'tabela-corpo-valor';
    let valorNovo = document.createTextNode("R$" + valorInput);
    tdValor.appendChild(valorNovo);

    let tdData = document.createElement('td');
    tdData.className = 'tabela-corpo-data';
    let dataNova = document.createTextNode(dataInput);
    tdData.appendChild(dataNova);

    let tdLogoRemover = document.createElement('td');
    let imgLogoRemover = document.createElement('img');
    tdLogoRemover.className = 'tabela-corpo-botao';
    imgLogoRemover.src = 'assets/minus.svg';
    imgLogoRemover.className = 'img-remove';
    tdLogoRemover.appendChild(imgLogoRemover);
    
    tr.appendChild(tdDescricao);
    tr.appendChild(tdValor);
    tr.appendChild(tdData);
    tr.appendChild(tdLogoRemover);

    tabelaCorpo.append(tr);
}

//Referenciando botao de remover linha
let imgRemove = document.getElementsByClassName('img-remove');

for (let i = 0; i < imgRemove.length; i++) {

}
