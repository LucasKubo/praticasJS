const Modal = {
    open() {
        document.querySelector('.modal-overlay').classList.add('active');
    },
    close() {
        document.querySelector('.modal-overlay').classList.remove('active');
    },
};

const Transaction = {
    //Array que contém todas as transações
    all:[
        {
            description: 'Luz',
            amount: -50000,
            date: '23/01/2022',
        },
        {
            description: 'Criação website',
            amount: 20000,
            date: '23/01/2022',
        },
        {
            description: 'Internet',
            amount: -40000,
            date: '23/01/2022',
        },
    ],
    
    addTransaction(transaction){
        Transaction.all.push(transaction);
        App.reload();
    },

    removeTransaction(index){
        Transaction.all.splice(index, 1);
        App.reload();
    },

    incomes() {
        let totalIncome = 0;
        Transaction.all.forEach(transaction => {
            if(transaction.amount > 0){
                totalIncome += transaction.amount;
            }
        })
        return totalIncome;
    },
    expenses() {
        let totalExpense = 0;
        Transaction.all.forEach(transaction => {
            if(transaction.amount < 0){
                totalExpense += transaction.amount;
            }
        })
        return totalExpense;
    },
    total() {
        return Transaction.incomes() + Transaction.expenses();
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
    //Recebe uma transacao e adiciona à página
    addTransaction(transaction, index) {
        const tr = document.createElement('tr');
        tr.className = 'tabela-corpo-linha';
        tr.innerHTML = this.innerHTMLTransaction(transaction);
        this.transactionContainer.appendChild(tr);
    },
    //Recebe uma transacao e transforma em HTML
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
    updateTransaction() {
        document.getElementById("incomeDisplay")
        .textContent = Utils.formatCurrency(Transaction.incomes());

        document.getElementById("expenseDisplay")
        .textContent = Utils.formatCurrency(Transaction.expenses());

        document.getElementById("totalDisplay")
        .textContent = Utils.formatCurrency(Transaction.total());
    },
    clearTransaction() {
        document.querySelector(".tabela-corpo").innerHTML = "";
    },
};

//Objeto que trata o estado da página
let App = {
    //Inicia a página
    init(){
        //Limpando tabela de transacoes
        DOM.clearTransaction();
        //Adicionando transacoes ao HTML 
        Transaction.all.forEach((transaction) => {
            DOM.addTransaction(transaction);
        });
        //Atualiza valores do display (incomes, expenses, total)
        DOM.updateTransaction();
    },
    //Recarrega a página (utilizado toda vez que há alguma alteração do estado)
    reload(){
        App.init();
    }
}

App.init();
