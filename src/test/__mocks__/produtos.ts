import { Produto } from '../../services/api';

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
