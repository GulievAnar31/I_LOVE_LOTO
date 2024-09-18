import { forwardRef } from 'react';
import styles from './Card.module.css';

type CardProps = {
	numbers: (number | null)[][];
};

export const Card = forwardRef<HTMLDivElement, CardProps>(({ numbers }, ref) => {
	return (
		<div ref={ref} className={styles.card}>
			{numbers.flat().map((number, index) => (
				<div key={index} className={styles.card__number}>
					{number !== null ? number : ""}
				</div>
			))}
		</div>
	);
});