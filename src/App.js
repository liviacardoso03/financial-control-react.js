import React, { useEffect, useState } from 'react';
import Form from './components/Form';
import Header from './components/Header';
import Resume from './components/Resume';
import GlobalStyle from './styles/global';

const App = () => {
    const data = localStorage.getItem("transactions"); //Criou-se uma variável para poder armazenar os dados pegos do 'localStorage'
    
    const [transactionsList, setTransactionsList] = useState(
        
        //Vai verificar se existe algum item no 'localStorage';
        //Se tiver, vai converter eles pra JSON;
        //Caso não haja resultados, irá retornar uma lista vazia
        data ? JSON.parse(data) : []
    );

    const [income, setIncome] = useState(0); //Variável criada para as entradas
    const [expense, setExpense] = useState(0); //Variável criada para as saídas
    const [total, setTotal] = useState(0); //Variável criada para o total

    useEffect(() => {
        const amountExpense = transactionsList //Declarou-se uma variável para poder pegar e armazenar os dados da 'transactionsList' da saída;
        .filter((item) => item.expense) //Vai filtrar os itens que são 'saídas';
        .map((transaction) => Number(transaction.amount)); //Dentro dessas saídas, ele vai mapear os itens que são 'amount (valor)' das saídas;

        const amountIncome = transactionsList //Declarou-se uma variável para poder pegar e armazenar os dados da 'transactionsList' da entrada;
        .filter((item) => !item.expense) //Vai filtrar os itens que são diferentes de 'saídas';
        .map((transaction) => Number(transaction.amount)); //Dentro dessas saídas, ele vai mapear os itens que são 'amount (valor)' das saídas;

        const expense = amountExpense.reduce((acc, cur) => acc + cur, 0).toFixed(2);
        //Declarou-se a variável 'expense' e fez-se um reduce para pegar a soma de todas as saídas e pegando duas casas decimais;

        const income = amountIncome.reduce((acc, cur) => acc + cur, 0).toFixed(2);
        //Declarou-se a variável 'expense' e fez-se um reduce para pegar a soma de todas as entradas e pegando duas casas decimais;

        const total = Math.abs(income - expense).toFixed(2);
        //Declarou-se a variável 'total' para poder fazer a diferença entre o 'income' e o 'expense', arredondando-as com 'Math' e pegando duas casas decimais

        setIncome(`R$ ${income}`);
        setExpense(`R$ ${expense}`);
        setTotal(`${Number(income) < Number(expense) ? "-" : ""}R$ ${total}`);
        //Fez-se uma condição no 'setTotal';
        //Se o 'income' for menor que o 'expense' (entradas menores que as saídas);
        //Será adicionado um "-" (sinal de menos) ao número e interpolar com total

    }, [transactionsList]); //Tem como dependência o 'transactionsList';
    // -> Isso significa que ao mudar a lista de transação, será efetuado os cálculos novamente

    const handleAdd = (transaction) => { //Vai adicionar um novo item, recebendo como parâmetro uma 'transaction'
        const newArrayTransactions = [...transactionsList, transaction]; //Pega para 'newArrayTransactions' todos os itens que já foram carregados inicialmente e adiciona essa nova 'transaction' passado como parâmetro
    
        setTransactionsList(newArrayTransactions);

        localStorage.setItem("transactions", JSON.stringify(newArrayTransactions));
        //Irá setar no 'localStorage' o item "transactions", passando o 'newArrayTransactions'
    }

    return(
        <>
            <Header />
            <Resume 
                income={income}
                expense={expense}
                total={total}
            />
            <Form handleAdd={handleAdd}/>
            <GlobalStyle />
        </>
    )
}

export default App;