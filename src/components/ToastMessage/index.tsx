import { useState } from 'react';

import { IToastMessage } from '@/types/toast-message.d';

import styles from './style.module.css';

type ToastMessageProps = {
	content: IToastMessage;
	onClose: (id: string) => void; 
};

export const ToastMessage: React.FC<ToastMessageProps> = ({ content: data, onClose }) => {
	const handleClose = () => {
		onClose(data.id); 
	};

	return (
		<div className={styles.container} data-toast-type={data.type} data-toast-id={data.id}>
			<span data-content>{data.message}</span>
			<span data-close onClick={handleClose}>╳</span>
		</div>
	);
};
