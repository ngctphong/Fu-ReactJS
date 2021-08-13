import useInput from '../hooks/useInput';

const SimpleInput = props => {
	const {
		value: enteredName,
		isValid: enteredNameIsValid,
		hasError: nameInputHasError,
		handleChangeValueInput: handleChangeNameInput,
		handleValueInputBlur: handleNameInputBlur,
		reset: resetNameInput,
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

	if (enteredNameIsValid && enteredEmailIsValid) {
		formIsValid = true;
	}

	const handleFormSubmission = e => {
		e.preventDefault();

		if (!enteredNameIsValid || !enteredEmailIsValid) {
			return;
		}

		resetNameInput();
		resetEmailInput();
	};

	const nameInputClasses = nameInputHasError
		? 'form-control invalid'
		: 'form-control';

	const emailInputClasses = emailInputHasError
		? 'form-control invalid'
		: 'form-control';

	return (
		<form onSubmit={handleFormSubmission}>
			<div className={nameInputClasses}>
				<label htmlFor='name'>Your Name</label>
				<input
					type='text'
					id='name'
					onChange={handleChangeNameInput}
					onBlur={handleNameInputBlur}
					value={enteredName}
				/>
				{nameInputHasError && (
					<p className='error-text'>Name must not be empty</p>
				)}
			</div>
			<div className={emailInputClasses}>
				<label htmlFor='email'>Email</label>
				<input
					type='email'
					id='email'
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

export default SimpleInput;
