import { client } from './client';

export type Produto = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
};

export async function listarProdutos(): Promise<Produto[]> {
  const { data } = await client.get('/products');
  return data;
}
