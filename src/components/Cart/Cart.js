import React from 'react';
import Modal from '../Modal/Modal';
import { useDispatch } from 'react-redux';
import { deleteSingleItem, deleteAllItems } from '../../actions'

const Cart = () => {
    const dispatch = useDispatch()

    const onSingleDeleteClick = (id) => {
        dispatch(deleteSingleItem(id))
    }

    const onDeleteAllClick = () => {
        dispatch(deleteAllItems())
    }

    return (
        <div>
            <Modal 
            onDeleteAllClick={onDeleteAllClick} 
            onSingleDeleteClick={onSingleDeleteClick} 
            />
        </div>
    )
}

export default Cart;
