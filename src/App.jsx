import { useState } from 'react';
import { Container } from './components/Box/Box';
import { Button } from './components/Button/Button';
import { CheckBox } from './components/CheckBox/CheckBox';
import { PasswordBox } from './components/PasswordBox/PasswordBox';
import { ErrorMessage } from './components/ErrorMessage/ErrorMessage';
import { Input } from './components/Input/Input';

function App() {
	const [password, setPassword] = useState('');
	const [hiddenPassword, setHiddenPassword] = useState('');
	const [passwordLength, setPasswordLength] = useState(8);
	const [error, setError] = useState(false);
	const [passwordIsShown, setPasswordIsShown] = useState(false);
	const [specialSyntax, setSpecialSyntax] = useState(false);
	const [number, setNumber] = useState(false);
	const [bigLetters, setBigLetters] = useState(false);
	const [passwordBoxIsShown, setPasswordBoxIsShown] = useState(false);
	const [errorMessage, setErrorMessage] = useState('');

	const coppyPassword = () => {
		navigator.clipboard.writeText(password);
		alert('Hasło zostało pomyślnie skopiowane');
	};

	const checkInput = () => {
		// || passwordLength > 20
		if (isNaN(passwordLength)) {
			setPasswordBoxIsShown(false);
			setError(true);
			setErrorMessage('Pole jest puste!');
		} else if (passwordLength < 3) {
			setPasswordBoxIsShown(false);
			setError(true);
			setErrorMessage('Hasło jest za krótkie. Musi zawierać minumum 3 znaki');
		} else {
			setError(false);
			handleGeneratePassword();
		}
	};

	const handleSpecialSyntaxChange = () => {
		setSpecialSyntax(prevStatus => !prevStatus);
	};

	const handleNumberChange = () => {
		setNumber(prevStatus => !prevStatus);
	};

	const handleBigLettersChange = () => {
		setBigLetters(prevStatus => !prevStatus);
	};

	const handleGeneratePassword = () => {
		setPassword('');
		setHiddenPassword('');
		let scope = 'abcdefghijklmnopqrstuvwxyz';
		const bigLetter = 'ABCDEFGHIJKLMNOUPRSTWYXZ';
		const special = '!@#$%^&*()?';
		const numbers = '0123456789';

		if (specialSyntax) {
			scope += special;
		}
		if (number) {
			scope += numbers;
		}
		if (bigLetters) {
			scope += bigLetter;
		}

		for (let i = 0; i < passwordLength; i++) {
			const randomIndex = Math.floor(Math.random() * scope.length);
			const randomCharacter = scope.charAt(randomIndex);
			setHiddenPassword(prevPass => (prevPass += '*'));
			setPassword(prevPass => (prevPass += randomCharacter));
		}

		setPasswordBoxIsShown(true);
	};

	const checkBoxes = [
		{ name: 'Znaki specialne', htmlFor: 'specialSyntax', onChange: handleSpecialSyntaxChange, checked: specialSyntax },
		{ name: 'Numery', htmlFor: 'number', onChange: handleNumberChange, checked: number },
		{ name: 'Wielkie litery', htmlFor: 'bigLetters', onChange: handleBigLettersChange, checked: bigLetters },
	];

	return (
		<Container>
			<label htmlFor='passwordLength' style={{ fontSize: 24 }}>
				Długość hasła:
			</label>
			<Input 
				passwordLength={passwordLength} 
				onChange={e => setPasswordLength(parseInt(e.target.value, 10))} 
			/>

			{error && <ErrorMessage message={errorMessage} />}

			{checkBoxes.map((checkbox, index) => (
				<CheckBox key={index} {...checkbox} />
			))}

			<Button onClick={checkInput}>Generuj hasło</Button>
			{passwordBoxIsShown && (
				<PasswordBox
					password={passwordIsShown ? password : hiddenPassword}
					onHandleShowPass={() => setPasswordIsShown(true)}
					onHandleCoppyPass={coppyPassword}
				/>
			)}
		</Container>
	);
}

export default App;
