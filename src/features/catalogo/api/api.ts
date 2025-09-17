import { client } from '../../../shared/services/client';

import { Produto } from './types';

export async function listarProdutos(): Promise<Produto[]> {
  const { data } = await client.get('/products');
  return data;
}
