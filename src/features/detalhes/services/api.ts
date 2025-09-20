import { client } from '@/shared/services/client';
import { Produto } from '@/shared/types';

export type DetalhesProdutoArgs = {
  id: number;
};

export async function detalhesProduto({
  id,
}: DetalhesProdutoArgs): Promise<Produto> {
  const { data } = await client.get(`/products/${id}`);
  return data;
}
