import styles from './Input.module.css';

export function Input({ passwordLength, onChange }) {
	return <input 
                className={styles.test} 
                type='number' id='passwordLength' 
                value={passwordLength} 
                onChange={onChange} 
        />;
}
