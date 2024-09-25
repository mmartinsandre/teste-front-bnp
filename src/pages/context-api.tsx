/**
 * Context Api
 *
 * - Criar um contexto para exibir mensagens de sucesso e erro
 * - Criar um componente para exibir as mensagens
 * - Criar um hook para disparar e consumir as mensagens
 * - Disparar as mensagens a partir dos botões abaixo
 * 
 * - DONE
 */

import styles from '@/styles/context-api.module.css';
import { IToastMessage } from '@/types/toast-message';
import { ToastMessage } from '@/components/ToastMessage';
import { useToast } from '@/contexts/toast-context';

export default function ContextApi() {
	const { messages, addMessage, setMessages } = useToast();

	function handleSuccessButtonClick() {
		const message: IToastMessage = {
			id: new Date().getTime().toString(),
			message: 'Mensagem de sucesso',
			type: 'success',
		};
		addMessage(message);
	}

	function handleErrorButtonClick() {
		const message: IToastMessage = {
			id: new Date().getTime().toString(),
			message: 'Mensagem de erro',
			type: 'error',
		};
		addMessage(message);
	}

	const handleCloseMessage = (id: string) => {
		setMessages((prevMessages) => prevMessages.filter(message => message.id !== id));
	};

	return (
		<>
			<div className={styles.container}>
				<button type="button" onClick={handleSuccessButtonClick}>
					Disparar mensagem de sucesso
				</button>
				<button type="button" onClick={handleErrorButtonClick}>
					Disparar mensagem de erro
				</button>
			</div>

			<div className={styles['toast-container']}>
				{messages.map((message) => (
					<ToastMessage 
						key={message.id} 
						content={message} 
						onClose={handleCloseMessage}
					/>
				))}
			</div>
		</>
	);
}
