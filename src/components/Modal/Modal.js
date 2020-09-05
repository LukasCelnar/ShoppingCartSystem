import React from 'react';
import ReactDOM from 'react-dom';
import { useSelector } from 'react-redux';
import history from '../../history';
import './Modal.css';

const Modal = ({ onSingleDeleteClick, onDeleteAllClick }) => {
    const cart = useSelector(state => state.cart)
    //
    let totalPrice = 0

    const renderModalContent = () => {

        if (cart.length === 0) { 
            history.push('/') 
        }

        return cart.map((suit, i) => {
            totalPrice = totalPrice + suit.price
            // <img className='modal__x-img' alt='x' src='/images/x.png' onClick={() => onSingleDeleteClick(suit.id)} />
            return (
                <div className='modal__description' key={i}>
                    <img className='modal__suit-img' alt='suit' src={'/images/suits/' + suit.id + '.jpg'} />
                    <div className='modal__name'>{suit.name}</div>
                    <div className='modal__price'>{`${suit.price}0 €`}</div>
                    <img className='modal__x-img' alt='x' src='/images/x.png' onClick={() => onSingleDeleteClick(i)} />
                </div>
            );
        });
    };

    return ReactDOM.createPortal(
        <div className='modal' onClick={() => history.push('/')}>
            <div className='modal__container' onClick={(e) => e.stopPropagation()}>
                <div className="modal__content">
                    {renderModalContent()}
                    <div className="modal__total-price">Total Price: {Math.ceil(totalPrice)} €</div>
                    <div className="modal__buttons">
                        <div className="modal__buttons-delete" onClick={() => history.push('/')}>CANCEL</div>
                        <div className="modal__buttons-delete" onClick={() => onDeleteAllClick()}>DELETE ALL</div>
                        <div className="modal__buttons-checkout">CHECKOUT</div>
                    </div>
                </div>
            </div>
        </div>,
        document.querySelector('#modal')
    )
}

export default Modal;