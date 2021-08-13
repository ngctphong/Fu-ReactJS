import useInput from '../hooks/useInput';

const BasicForm = props => {
	const {
		value: enteredFirstName,
		isValid: enteredFirstNameIsValid,
		hasError: firstNameInputHasError,
		handleChangeValueInput: handleChangeFirstNameInput,
		handleValueInputBlur: handleFirstNameInputBlur,
		reset: resetFirstNameInput,
	} = useInput(value => value.trim() !== '');

	const {
		value: enteredLastName,
		isValid: enteredLastNameIsValid,
		hasError: lastNameInputHasError,
		handleChangeValueInput: handleChangeLastNameInput,
		handleValueInputBlur: handleLastNameInputBlur,
		reset: resetLastNameInput,
	} = useInput(value => value.trim() !== '');

	const {
		value: enteredEmail,
		isValid: enteredEmailIsValid,
		hasError: emailInputHasError,
		handleChangeValueInput: handleChangeEmailInput,
		handleValueInputBlur: handleEmailInputBlur,
		reset: resetEmailInput,
	} = useInput(value => value.includes('@'));

	let formIsValid = false;

	if (enteredFirstNameIsValid && enteredLastNameIsValid && enteredEmailIsValid) {
		formIsValid = true;
	}

	const handleSubmitForm = e => {
		e.preventDefault();

		if (
			!enteredFirstNameIsValid ||
			!enteredLastNameIsValid ||
			!enteredEmailIsValid
		) {
			return;
		}

		resetFirstNameInput();
		resetLastNameInput();
		resetEmailInput();
	};
	const firstNameInputClasses = firstNameInputHasError
		? 'form-control invalid'
		: 'form-control';

	const lastNameInputClasses = lastNameInputHasError
		? 'form-control invalid'
		: 'form-control';

	const emailInputClasses = emailInputHasError
		? 'form-control invalid'
		: 'form-control';

	return (
		<form onSubmit={handleSubmitForm}>
			<div className='control-group'>
				<div className={firstNameInputClasses}>
					<label htmlFor='name'>First Name</label>
					<input
						type='text'
						id='name'
						onChange={handleChangeFirstNameInput}
						onBlur={handleFirstNameInputBlur}
						value={enteredFirstName}
					/>
					{firstNameInputHasError && (
						<p className='error-text'>First name must not be empty</p>
					)}
				</div>
				<div className={lastNameInputClasses}>
					<label htmlFor='name'>Last Name</label>
					<input
						type='text'
						id='name'
						onChange={handleChangeLastNameInput}
						onBlur={handleLastNameInputBlur}
						value={enteredLastName}
					/>
					{lastNameInputHasError && (
						<p className='error-text'>Last name must not be empty</p>
					)}
				</div>
			</div>
			<div className={emailInputClasses}>
				<label htmlFor='name'>E-Mail Address</label>
				<input
					type='text'
					id='name'
					onChange={handleChangeEmailInput}
					onBlur={handleEmailInputBlur}
					value={enteredEmail}
				/>
				{emailInputHasError && (
					<p className='error-text'>Please enter a valid email</p>
				)}
			</div>
			<div className='form-actions'>
				<button disabled={!formIsValid}>Submit</button>
			</div>
		</form>
	);
};

export default BasicForm;
