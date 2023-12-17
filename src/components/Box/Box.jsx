import styles from './Box.module.css';
export function Box({ children }) {
	return <div className={styles.box}>{children}</div>;
}
