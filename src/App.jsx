import { useState } from 'react';
import './App.css';
import { Box } from './components/Box/Box';
import { Button } from './components/Button/Button';
import { CheckBox } from './components/CheckBox/CheckBox';
import { PasswordBox } from './components/PasswordBox/PasswordBox';

function App() {
	const [password, setPassword] = useState('');
	const [hiddenPassword, setHiddenPassword] = useState('');
	const [passwordLength, setPasswordLength] = useState(8);
	const [passwordIsShown, setPasswordIsShown] = useState(false);
	const [specialSyntax, setSpecialSyntax] = useState(false);
	const [number, setNumber] = useState(false);
	const [bigLetters, setBigLetters] = useState(false);
	const [passwordBoxIsShown, setPasswordBoxIsShown] = useState(false);

	// let hiddePassword = '';

	const coppyPassword = () => {
		navigator.clipboard.writeText(password);
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

	return (
		<>
			<Box>
				<label htmlFor='passwordLength' style={{ fontSize: 24 }}>
					Długość hasła:
				</label>
				<input
					type='number'
					min={3}
					max={20}
					id='passwordLength'
					style={{ padding: 10, width: '65%' }}
					value={passwordLength}
					onChange={e => setPasswordLength(parseInt(e.target.value, 10))}
				/>
				<CheckBox
					checked={specialSyntax}
					onChange={handleSpecialSyntaxChange}
					htmlFor={'specialSyntax'}
					name={'Znaki specialne'}
				/>
				<CheckBox checked={number} onChange={handleNumberChange} htmlFor={'number'} name={'Numery'} />
				<CheckBox
					checked={bigLetters}
					onChange={handleBigLettersChange}
					htmlFor={'bigLetters'}
					name={'Wielkie litery'}
				/>
				<Button onClick={handleGeneratePassword}>Generuj hasło</Button>
				{passwordBoxIsShown && (
					<PasswordBox
						password={passwordIsShown ? password : hiddenPassword}
						onHandleShowPass={() => setPasswordIsShown(true)}
						onHandleCoppyPass={coppyPassword}
					/>
				)}
			</Box>
		</>
	);
}

export default App;
