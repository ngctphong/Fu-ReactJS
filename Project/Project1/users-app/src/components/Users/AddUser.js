import React, { useState } from 'react';

import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';

import styles from './AddUser.module.css';

const AddUser = ({ onAddUser }) => {
	const [userName, setUserName] = useState('');
	const [age, setAge] = useState('');
	const [error, setError] = useState();

	const handleAddUser = e => {
		e.preventDefault();

		if (userName.trim().length === 0 || age.trim().length === 0) {
			setError({
				title: 'Invalid input',
				message: 'Please enter a valid name and age (non-empty values).',
			});
			return;
		}

		if (+age < 1) {
			setError({
				title: 'Invalid age',
				message: 'Please enter a valid age (> 0).',
			});
			return;
		}

		onAddUser(userName, age);
		setUserName('');
		setAge('');
	};

	const handleChangeUserName = e => {
		setUserName(e.target.value);
	};

	const handleChangeAge = e => {
		setAge(e.target.value);
	};

	const handleError = () => {
		setUserName('');
		setAge('');
		setError(null);
	}

	return (
		<div>
			{error && <ErrorModal title={error.title} message={error.message} onConfirm={handleError} />}
			<Card className={styles.input}>
				<form onSubmit={handleAddUser}>
					<label htmlFor='username'>Username</label>
					<input
						id='username'
						value={userName}
						type='text'
						onChange={handleChangeUserName}
					/>
					<label htmlFor='age'>Age (Years)</label>
					<input
						id='age'
						value={age}
						type='number'
						onChange={handleChangeAge}
					/>
					<Button type='submit'>Add User</Button>
				</form>
			</Card>
		</div>
	);
};

export default AddUser;
