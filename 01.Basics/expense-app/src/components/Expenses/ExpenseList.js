import React from 'react';

import ExpenseItem from './ExpenseItem';

import './ExpenseList.css';

const ExpenseList = ({ items }) => {
	if (items.length === 0) {
		return <h2 className='expenses-list__fallback'>Found no expenses</h2>;
	}

	return (
		<ul className='expenses-list'>
			{items.map(expense => {
				const month = expense.date.toLocaleString('en-US', { month: 'long' });
				const day = expense.date.toLocaleString('en-US', { day: '2-digit' });
				const year = expense.date.getFullYear();

				return (
					<ExpenseItem
						key={expense.id}
						month={month}
						day={day}
						year={year}
						expense={expense}
					/>
				);
			})}
		</ul>
	);
};

export default ExpenseList;
