import { Button } from '../Button/Button';
import styles from './PasswordBox.module.css';

export function PasswordBox({ password, onHandleShowPass, onHandleCoppyPass }) {
	return (
		<>
			<div className={styles.container}>
				<strong className={styles.text}>Twoje hasło:</strong>
				<p className={styles.password}>{password}</p>
			</div>
			<div className={styles.buttonsContainer}>
				<Button onClick={onHandleShowPass}>Pokaż</Button>
				<Button onClick={onHandleCoppyPass}>Kopiuj</Button>
			</div>
		</>
	);
}
