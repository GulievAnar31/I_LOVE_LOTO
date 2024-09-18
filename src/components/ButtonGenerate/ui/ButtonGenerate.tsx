import { FC, ReactNode } from "react";
import styles from './ButtonGenerate.module.css';

type GenerateButtonProps = {
	onClick: () => void;
	children: ReactNode;
}

export const ButtonGenerate: FC<GenerateButtonProps> = ({ onClick, children }) => {
	return (
		<button className={styles.button} onClick={onClick}>
			{children}
		</button>
	)
};