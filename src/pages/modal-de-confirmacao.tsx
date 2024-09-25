/**
 * Modal de confirmação
 *
 * - Crie um component para o modal de confirmação
 * - Utilize o código abaixo como base
 * - O modal deve ser aberto ao clicar no botão "Abrir modal de confirmação"
 * - O título deve ser "Confirmação"
 * - O conteudo deve ser dinâmico
 * 
 * - DONE
 */

import { useState } from 'react';
import Head from 'next/head';

import styles from '@/styles/modal.module.css';
import { Modal } from '@/components/Modal';

export default function Home() {
	const [modalIsOpen, setModalIsOpen] = useState(false);
	const [modalContent, setModalContent] = useState("Esta é uma mensagem de confirmação.");

	const handleOpenModal = () => {
		setModalIsOpen(true);
	};

	const handleConfirm = () => {
		alert('Ação confirmada!');
		setModalIsOpen(false);
	};

	const handleClose = () => {
		setModalIsOpen(false);
	};

	return (
		<>
			<main className={styles.container}>
				<button type="button" onClick={handleOpenModal}>
					Abrir modal de confirmação
				</button>
			</main>

			<Modal
				isOpen={modalIsOpen}
				title="Confirmação"
				onClose={handleClose}
				onConfirm={handleConfirm}
				footer={{ confirmText: 'Confirmar', cancelText: 'Cancelar' }}
			>
				<div>{modalContent}</div>
			</Modal>
		</>
	);
}