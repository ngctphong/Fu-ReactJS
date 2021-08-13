import { useReducer } from 'react';

import CartContext from './cart-context';

const defaultCartState = {
	items: [],
	totalAmount: 0,
};

const cartReducer = (state, action) => {
	switch (action.type) {
		case 'ADD_ITEM':
			const updatedTotalAmountAfterAdd =
				state.totalAmount + action.item.price * action.item.amount;

			const existingCartItemToAddIndex = state.items.findIndex(
				item => item.id === action.item.id
			);
			const existingCartItemToAdd = state.items[existingCartItemToAddIndex];
			let updatedItemsAfterAdd;

			if (existingCartItemToAdd) {
				const updatedItem = {
					...existingCartItemToAdd,
					amount: existingCartItemToAdd.amount + action.item.amount,
				};
				updatedItemsAfterAdd = [...state.items];
				updatedItemsAfterAdd[existingCartItemToAddIndex] = updatedItem;
			} else {
				updatedItemsAfterAdd = state.items.concat(action.item);
			}

			return {
				items: updatedItemsAfterAdd,
				totalAmount: updatedTotalAmountAfterAdd,
			};

		case 'REMOVE_ITEM':
			const existingCartItemToRemoveIndex = state.items.findIndex(
				item => item.id === action.id
			);

			const existingCartItemToRemove =
				state.items[existingCartItemToRemoveIndex];

			const updatedTotalAmountAfterRemove =
				state.totalAmount - existingCartItemToRemove.price;

			let updatedItemsAfterRemove;

			if (existingCartItemToRemove.amount > 1) {
				const updateItem = {
					...existingCartItemToRemove,
					amount: existingCartItemToRemove.amount - 1,
				};
				updatedItemsAfterRemove = [...state.items];
				updatedItemsAfterRemove[existingCartItemToRemoveIndex] = updateItem;
			} else {
				// updatedItemsAfterRemove = [...state.items];
				// updatedItemsAfterRemove.splice(existingCartItemToRemoveIndex, 1);
				updatedItemsAfterRemove = state.items.filter(
					item => item.id !== action.id
				);
			}

			return {
				items: updatedItemsAfterRemove,
				totalAmount: updatedTotalAmountAfterRemove,
			};

		case 'CLEAR':
			return defaultCartState;

		default:
			return defaultCartState;
	}
};

const CartProvider = ({ children }) => {
	const [cartState, dispatchCartAction] = useReducer(
		cartReducer,
		defaultCartState
	);

	const handleAddItemToCart = item => {
		dispatchCartAction({ type: 'ADD_ITEM', item });
	};

	const handleRemoveItemFromCart = id => {
		dispatchCartAction({ type: 'REMOVE_ITEM', id });
	};

	const handleClearCart = () => {
		dispatchCartAction({ type: 'CLEAR' });
	};

	const cartContext = {
		items: cartState.items,
		totalAmount: cartState.totalAmount,
		addItem: handleAddItemToCart,
		removeItem: handleRemoveItemFromCart,
		clearCart: handleClearCart,
	};

	return (
		<CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
	);
};

export default CartProvider;
