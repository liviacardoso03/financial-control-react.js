import React, { useState } from 'react';
import * as C from './styles'

const Form = ({ handleAdd }) => {
    const [desc, setDesc] = useState(''); //Descrição
    const [amount, setAmount] = useState(''); //Valor
    const [isExpense, setExpense] = useState(false); //Cheque
    
    const generateId = () => Math.round(Math.random() * 1000); //Irá gerar um id aleatório para os itens da transação

const handleSave = () => {
    if(!desc || !amount){
        alert('Informe a descrição e o valor!');
        return;
    }

    else if(amount < 1){
        alert('Informe um valor positivo!');
        return;
    }

    const transaction = { //Irá conter as características dos itens
        id: generateId(),
        desc: desc,
        amount: amount,
        expense: isExpense,
    };

    handleAdd(transaction);
    setDesc("");
    setAmount("");
};

    return(
        <>
            <C.Container>
                <C.InputContent>
                    <C.Label>Descrição</C.Label>
                    <C.Input 
                    value={desc} 
                    onChange={(e) => setDesc(e.target.value)} 
                    />
                </C.InputContent>

                <C.InputContent>
                    <C.Label>Valor</C.Label>
                    <C.Input 
                    value={amount} 
                    type="number" 
                    onChange={(e) => setAmount(e.target.value)} 
                    />
                </C.InputContent>

                <C.RadioGroup>
                    <C.Input 
                        type="radio"
                        id="rIncome"
                        defaultChecked
                        name="group1"
                        onChange={() => setExpense(!isExpense)}
                    />
                <C.Label htmlFor="rIncome">Entrada</C.Label>

                    <C.Input 
                        type="radio"
                        id="rExpenses"
                        name="group1"
                        onChange={() => setExpense(!isExpense)}
                    />
                <C.Label htmlFor="rExpenses">Saída</C.Label>
                </C.RadioGroup>

                <C.Button onClick={handleSave}>Adicionar</C.Button>
            </C.Container>
        </>
    )
}

export default Form;