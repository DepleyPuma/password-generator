import styles from './CheckBox.module.css';

export function CheckBox({ name, htmlFor, onChange, checked }) {
	return (
		<label className={styles.label} htmlFor={htmlFor}>
			<input type='checkbox' checked={checked} id={htmlFor} onChange={onChange} />
			{name}
		</label>
	);
}
