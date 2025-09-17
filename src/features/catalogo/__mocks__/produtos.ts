import { Produto } from '../api/types';

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
