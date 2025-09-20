import { ProdutoDoCarrinho } from '@/shared/types';
import { Produto } from '../types';

export const MOCKED_PRODUTOS: Produto[] = [
  {
    category: 'mocked-category',
    description: 'mocked-description',
    id: 0,
    image: 'mocked-image',
    price: 100,
    rating: {
      count: 10,
      rate: 10,
    },
    title: 'mocked-title',
  },
];

export const criarMockProduto = (produto?: Partial<Produto>) => {
  return { ...MOCKED_PRODUTOS[0], ...produto };
};

export const criarMockProdutoDoCarrinho = (
  produto?: Partial<ProdutoDoCarrinho>
): ProdutoDoCarrinho => {
  const { id, image, price, title } = MOCKED_PRODUTOS[0];
  return { id, image, price, title, total: 100, quantidade: 1, ...produto };
};
