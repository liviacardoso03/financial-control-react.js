import React from 'react';
import GridItem from '../GridItem';
import * as C from './styles';

const Grid = ({ itens, setItens }) => {
    const onDelete = (ID) => { //Função 'onDelete'
        const newArray = itens.filter((transaction) => transaction.id !== ID);
        //Faz-se um filtro para carregar todas as  transações onde o id é diferente do 'id' passado como parâmetro  

        setItens(newArray); //Seta o id
        localStorage.setItem("transactions", JSON.stringify(newArray)); //Faz um link e remove o item do banco
      };

      return (
        <C.Table>
            <C.Thead>
                <C.Tr>
                    <C.Th width={40}>Descrição</C.Th>
                    <C.Th width={40}>Valor</C.Th>
                    <C.Th width={10} alignCenter>Tipo</C.Th>
                    <C.Th width={10}></C.Th>
                </C.Tr>
          </C.Thead>

          <C.Tbody>
                {itens?.map((item, index) => (
                <GridItem key={index} item={item} onDelete={onDelete} />
                ))}
          </C.Tbody>
        </C.Table>
      );
    };
    
    export default Grid;