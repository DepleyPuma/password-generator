import styles from './Box.module.css';
export function Container({ children }) {
	return <div className={styles.box}>{children}</div>;
}
