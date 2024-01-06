import styles from './ErrorMessage.module.css';

export function ErrorMessage({ message }) {
	return <p className={styles.errorMessage}>{message}</p>;
}
