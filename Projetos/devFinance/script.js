const Modal = {
    open() {
        document.querySelector('.modal-overlay').classList.add('active');
    },
    close() {
        document.querySelector('.modal-overlay').classList.remove('active');
    },
};

//Array que contém todas as transações
const transactions = [
    {
        id: 1,
        description: 'Luz',
        amount: -50000,
        date: '23/01/2022',
    },
    {
        id: 2,
        description: 'Criação website',
        amount: 20000,
        date: '23/01/2022',
    },
    {
        id: 3,
        description: 'Internet',
        amount: -40000,
        date: '23/01/2022',
    },
];

const Transaction = {
    incomes() {
        //Somar entradas
    },
    expenses() {
        //Somar as saídas
    },
    total() {
        //Entradas - saídas
    },
};

const Utils = {
    formatCurrency(value){
        const signal = Number(value) < 0 ? "-" : "";

        //Regex que pega tudo que não for número na String
        value = String(value).replace(/\D/g, "");

        value = Number(value) / 100;

        //Formatando para a moeda brasileira
        value = value.toLocaleString("pt-BR",{
            style: "currency",
            currency: "BRL"
        })

        return signal + value
    } 
}

const DOM = {
    transactionContainer: document.querySelector('.tabela-corpo'),
    addTransaction(transaction, index) {
        const tr = document.createElement('tr');
        tr.className = 'tabela-corpo-linha';
        tr.innerHTML = this.innerHTMLTransaction(transaction);
        this.transactionContainer.appendChild(tr);
    },
    innerHTMLTransaction(transaction) {
        const CSSclass = transaction.amount > 0 ? "tabela-corpo-valor income" : "tabela-corpo-valor expense";
 
        const html = 
        `
            <td class="tabela-corpo-descricao">
                ${transaction.description}
            </td>
            <td class="${CSSclass}">${Utils.formatCurrency(transaction.amount)}</td>
            <td class="tabela-corpo-data">${transaction.date}</td>
            <td class="tabela-corpo-botao">
                <img src="assets/minus.svg" />
            </td>
        `;
        return html;
    },
};

transactions.forEach((transaction) => {
    DOM.addTransaction(transaction);
});