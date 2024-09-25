/**
 * @api {get} /api/users Read list
 *
 * Resolva o exercício aqui:
 *
 * - Crie uma API que retorne uma lista de usuários
 * - A request deve receber apenas o método GET
 * - A lista deve conter pelo menos 2 usuários
 * - Cada usuário deve ter um id, nome e email
 * - Utilize a interface IUser para tipar os dados
 * 
 * - DONE
 */

import { NextApiRequest, NextApiResponse } from 'next/types';
import { IUser } from '@/types/user.d';

export default (req: NextApiRequest, res: NextApiResponse) => {
	if (req.method !== 'GET') {
		return res.status(405).json({ message: 'Método não permitido' });
	}

	const users: IUser[] = [
		{ id: 1, name: 'Usuário 1', email: 'usuario1@example.com' },
		{ id: 2, name: 'Usuário 2', email: 'usuario2@example.com' },
	];

	return res.status(200).json(users);
};
