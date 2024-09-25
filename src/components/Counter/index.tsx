import { useState, useEffect } from 'react';

type CounterProps = {
	initialCount: number;
};

export const Counter: React.FC<CounterProps> = ({ initialCount }) => {
	const [count, setCount] = useState(initialCount);

	useEffect(() => {
		setCount(initialCount); 
	}, [initialCount]);

	useEffect(() => {
		console.log('Componente montado!');

		return () => {
			console.log('Componente desmontado!');
		};
	}, []);

	useEffect(() => {
		console.log('Componente atualizado!');
	}, [count]);

	const handleIncrement = () => {
		const newCount = count + 1;
		setCount(newCount);

		const event = new CustomEvent('onCounterUpdate', { detail: newCount });
		window.dispatchEvent(event);
	};

	return (
		<div>
			<h2>Contador: {count}</h2>
			<button onClick={handleIncrement}>Incrementar +</button>
		</div>
	);
};
