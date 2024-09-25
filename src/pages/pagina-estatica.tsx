/**
 * Página estática
 *
 * - Atualmente o conteúdo é gerado no momento em que a requisição é feita
 * - Você deve transformar essa página em uma página estática
 * - A página deve ser gerada no momento da build
 * - A página deve ser atualizada a cada 1 minuto
 * 
 * - DONE
 */

import styles from '@/styles/lista.module.css';
import { ICity } from '@/types/city.d';

interface Props {
	list: Array<ICity>;
}

export default function Lista({ list = [] }: Props) { 
	return (
		<div className={styles.container}>
			<div className={styles.content}>
				<h2>Lista de cidades</h2>

				<div data-list-container>
					{list.map((city) => (
						<div data-list-item key={city.id}>
							{city.name}
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export async function getStaticProps() {
	try {
		const response = await fetch('http://localhost:3000/api/cities/10'); 

		if (!response.ok) {
			throw new Error(`Erro na requisição: ${response.statusText}`);
		}

		const data = await response.json();

		return {
			props: {
				list: data || [],
			},
			revalidate: 60, 
		};
	} catch (error) {
		console.error('Erro ao buscar dados:', error);
		return {
			props: {
				list: [], 
			},
		};
	}
}
