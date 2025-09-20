import { criarMockProduto } from '@/shared/__mocks__';

import { produtosPorCategoria } from './produtosPorCategoria';

describe('produtosEmCategoria', () => {
  describe('quando executado', () => {
    test('com uma categoria', () => {
      const produtos = produtosPorCategoria([
        criarMockProduto(),
        criarMockProduto(),
        criarMockProduto(),
      ]);
      expect(produtos['mocked-category'].length).toBe(3);
    });
    test('com mais de uma categoria', () => {
      const produtos = produtosPorCategoria([
        criarMockProduto(),
        criarMockProduto({ category: 'mocked-category-2' }),
        criarMockProduto({ category: 'mocked-category-2' }),
      ]);
      expect(produtos['mocked-category-2'].length).toBe(2);
      expect(produtos['mocked-category'].length).toBe(1);
    });
  });
});
