import React, { useState } from 'react';

import ExpenseList from './ExpenseList';
import Card from '../UI/Card';
import ExpenseFilter from './ExpenseFilter';
import ExpenseChart from './ExpenseChart';

import './Expenses.css';

const Expenses = ({ expenses }) => {
	const [filteredYear, setFilteredYear] = useState('2020');

	const handleFilterChange = selectedYear => {
		setFilteredYear(selectedYear);
	};

	const filteredExpenses = expenses.filter(expense => {
		return expense.date.getFullYear().toString() === filteredYear;
	});

	return (
		<Card className='expenses'>
			<ExpenseFilter
				selected={filteredYear}
				onChangeFilter={handleFilterChange}
			/>
			<ExpenseChart expenses={filteredExpenses} />
			<ExpenseList items={filteredExpenses} />
		</Card>
	);
};

export default Expenses;
