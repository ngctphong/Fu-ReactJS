import React from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

import './ExpenseItem.css';

const ExpenseItem = ({ expense, month, day, year }) => {
	return (
		<li>
			<Card className='expense-item'>
				<ExpenseDate month={month} day={day} year={year} />
				<div className='expense-item__description'>
					<h2>{expense.title}</h2>
					<div className='expense-item__price'>${expense.amount}</div>
				</div>
			</Card>
		</li>
	);
};

export default ExpenseItem;
