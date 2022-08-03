import React from 'react';
import * as C from './styles';
import {FaRegArrowAltCircleUp, FaRegArrowAltCircleDown, FaDollarSign, FaTrash} from 'react-icons/fa';

const GridItem = ({ item, onDelete}) => {
    return(
        <C.Tr>
            <C.Td>{item.desc}</C.Td>
            <C.Td>{item.amount}</C.Td>
            <C.Td alignCenter>
                {item.expense ? //Se o item for uma despesa...
                    (<FaRegArrowAltCircleDown color="red" />) : //Ele irá carregar um icon 'red'
                    (<FaRegArrowAltCircleUp color="green" />) //Se não for, irá carregar um icon 'green'
                }
            </C.Td>
            <C.Td>
                <FaTrash onClick={() => onDelete(item.id)}/>
            </C.Td>
        </C.Tr>
    );
};

export default GridItem;