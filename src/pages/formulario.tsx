/**
 * Formulário
 *
 * - Primeiramente vá até /src/pages/api/users/create.ts e implemente a API
 * - Deve ser implementado utilizando a lib react-hook-form
 * - O formulário deve ter os seguintes campos: nome, e-mail
 * - Os dois campos são obrigatórios e precisam de validação
 * - Ao dar 'submit', deve ser feito uma request para /api/users/create
 * - Lide com os possíveis erros
 * 
 * - DONE
 */

import { useForm } from 'react-hook-form';
import styles from '@/styles/formulario.module.css';

interface FormData {
    name: string;
    email: string;
}

export default function Form() {
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

    const onSubmit = async (data: FormData) => {
        try {
            const response = await fetch('/api/users/create', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                throw new Error('Erro ao criar usuário');
            }

            const result = await response.json();
            console.log('Usuário criado:', result);

            alert(`Usuário criado: ${result.name} (${result.email})`);
        } catch (error) {
            console.error('Erro:', error);
            alert('Erro ao criar usuário. Tente novamente.');
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <input 
                            type="text" 
                            placeholder="Nome" 
                            {...register('name', { required: 'Nome é obrigatório' })} 
                        />
                        {errors.name && <span>{errors.name.message}</span>}
                    </div>
                    <div>
                        <input 
                            type="email" 
                            placeholder="E-mail" 
                            {...register('email', { 
                                required: 'E-mail é obrigatório', 
                                pattern: {
                                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                    message: 'E-mail inválido'
                                }
                            })} 
                        />
                        {errors.email && <span>{errors.email.message}</span>}
                    </div>

                    <button type="submit" data-type="confirm">
                        Enviar
                    </button>
                </form>
            </div>
        </div>
    );
}
