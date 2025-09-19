import { criarMockProduto } from '@/test/__mocks__';

import { adicionarProduto } from './carrinho';

const produto = criarMockProduto();

describe('adicionarProduto', () => {
  describe('quando executado', () => {
    test('e não possui produtoListado', () => {
      const { totalAtualizado, produtoAtualizado } = adicionarProduto({
        produto,
        produtoListado: undefined,
        total: 0,
      });

      expect(totalAtualizado).toBe(produto.price);
      expect(produtoAtualizado).toStrictEqual({
        ...produto,
        total: 100,
        quantidade: 1,
      });
    });
    test('e possui produtoListado', () => {
      const { totalAtualizado, produtoAtualizado } = adicionarProduto({
        produto,
        produtoListado: { ...produto, total: 100, quantidade: 1 },
        total: 100,
      });

      expect(totalAtualizado).toBe(200);
      expect(produtoAtualizado).toStrictEqual({
        ...produto,
        total: 200,
        quantidade: 2,
      });
    });
  });
});
