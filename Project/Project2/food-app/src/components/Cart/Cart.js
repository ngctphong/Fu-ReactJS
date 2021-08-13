import React, { useContext, useState } from 'react';

import Modal from '../UI/Modal';
import CartItem from './CartItem';
import CartContext from '../../context/cart-context';
import Checkout from './Checkout';

import classes from './Cart.module.css';

const Cart = ({ onHideCart }) => {
	const [isCheckout, setIsCheckout] = useState(false);
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [didSubmit, setDidSubmit] = useState(false);
	const cartCtx = useContext(CartContext);

	const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
	const hasItems = cartCtx.items.length > 0;

	const handleCartRemoveItem = id => {
		cartCtx.removeItem(id);
	};

	const handleCartAddItem = item => {
		cartCtx.addItem({ ...item, amount: 1 });
	};

	const handleOrder = () => {
		setIsCheckout(true);
	};

	const handleSubmitOrder = async userData => {
		setIsSubmitting(true);
		await fetch(
			'https://react-http-1dddc-default-rtdb.asia-southeast1.firebasedatabase.app/orders.json',
			{
				method: 'POST',
				body: JSON.stringify({
					user: userData,
					orderedItems: cartCtx.items,
				}),
			}
		);
		setIsSubmitting(false);
		setDidSubmit(true);
		cartCtx.clearCart();
	};

	const cartItems = (
		<ul className={classes['cart-items']}>
			{cartCtx.items.map(item => (
				<CartItem
					key={item.id}
					name={item.name}
					amount={item.amount}
					price={item.price}
					onRemove={() => handleCartRemoveItem(item.id)}
					onAdd={() => handleCartAddItem(item)}
				/>
			))}
		</ul>
	);

	const modalActions = (
		<div className={classes.actions}>
			<button className={classes['button--alt']} onClick={onHideCart}>
				Close
			</button>
			{hasItems && (
				<button className={classes.button} onClick={handleOrder}>
					Order
				</button>
			)}
		</div>
	);

	const cartModalContent = (
		<>
			{cartItems}
			<div className={classes.total}>
				<span>Total Amount</span>
				<span>{totalAmount}</span>
			</div>
			{isCheckout && (
				<Checkout onConfirm={handleSubmitOrder} onCancel={onHideCart} />
			)}
			{!isCheckout && modalActions}
		</>
	);

	const isSubmittingModalContent = <p>Sending order data ..</p>;

	const didSubmitModalContent = (
		<>
			<p>Successfully sent the order!</p>
			<div className={classes.actions}>
				<button className={classes.button} onClick={onHideCart}>
					Close
				</button>
			</div>
		</>
	);

	return (
		<Modal onClose={onHideCart}>
			{!isSubmitting && !didSubmit && cartModalContent}
			{isSubmitting && isSubmittingModalContent}
			{!isSubmitting && didSubmit && didSubmitModalContent}
		</Modal>
	);
};

export default Cart;
