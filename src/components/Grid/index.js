import React from 'react';
import GridItem from '../GridItem';
import * as C from './styles';

const Grid = ({ itens, setItens }) => {
    return(
        <C.Table>
            <C.Thead>
                <C.Tr>
                    <C.Th widht={40}>Descrição</C.Th>
                    <C.Th widht={40}>Valor</C.Th>
                    <C.Th widht={10} alignCenter>Tipo</C.Th>
                    <C.Th widht={10}></C.Th>
                </C.Tr>
            </C.Thead>
            <C.Tbody>
                {itens?.map((item, index) =>
                    <GridItem key={index} item={item} />
                )}
            </C.Tbody>
        </C.Table>
    );
};

export default Grid;