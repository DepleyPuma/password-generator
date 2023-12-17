import styles from './ErrorMessage.module.css';

export function ErrorMessage() {
	return <p className={styles.errorMessage}>Hasło musi być w przedziale od 3 do 20 znaków</p>;
}
