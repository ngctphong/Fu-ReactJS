import React, { useContext } from 'react';

import MealItemForm from './MealItemForm';
import CartContext from '../../../context/cart-context';

import classes from './MealItem.module.css';

const MealItem = ({ id, name, description, price }) => {
	const cartCtx = useContext(CartContext);

	const showPrice = `$${price.toFixed(2)}`;

	const handleAddToCart = amount => {
		cartCtx.addItem({
			id,
			name,
			amount,
			price,
		});
	};

	return (
		<li className={classes.meal}>
			<div>
				<h3>{name}</h3>
				<div className={classes.description}>{description}</div>
				<div className={classes.price}>{showPrice}</div>
			</div>
			<div>
				<MealItemForm id={id} onAddToCart={handleAddToCart} />
			</div>
		</li>
	);
};

export default MealItem;
