import React from 'react';

import ExpenseForm from './ExpenseForm';

import './NewExpense.css';

const NewExpense = ({ onAddExpense }) => {
	// const handleSaveExpenseData = enteredExpenseData => {
	// 	const expenseData = {
	// 		...enteredExpenseData,
	// 		id: Math.random().toString(),
	// 	};

	// 	onAddExpense(expenseData);
	// };

	return (
		<div className='new-expense'>
			{/* <ExpenseForm onSaveExpenseData={handleSaveExpenseData} /> */}
			<ExpenseForm onSaveExpenseData={onAddExpense} />
		</div>
	);
};

export default NewExpense;
