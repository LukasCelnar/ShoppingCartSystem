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
        <Modal onDeleteAllClick={onDeleteAllClick} onSingleDeleteClick={onSingleDeleteClick} />
    )
}

export default Cart;
