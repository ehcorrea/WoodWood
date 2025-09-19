import { criarMockProduto } from '@/test/__mocks__';

import { adicionarProduto, removerProduto } from './carrinho';

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

describe('removerProduto', () => {
  describe('quando executado', () => {
    test('e quantidade é maior que 0', () => {
      const { totalAtualizado, produtoAtualizado } = removerProduto({
        produto,
        produtoListado: { ...produto, total: 200, quantidade: 2 },
        total: 200,
      });
      expect(totalAtualizado).toBe(100);
      expect(produtoAtualizado).toStrictEqual({
        ...produto,
        total: 100,
        quantidade: 1,
      });
    });
    test('e quantidade é atualizada pra 0', () => {
      const { totalAtualizado, produtoAtualizado } = removerProduto({
        produto,
        produtoListado: { ...produto, total: 100, quantidade: 1 },
        total: 100,
      });
      expect(totalAtualizado).toBe(0);
      expect(produtoAtualizado).toBeUndefined();
    });
  });
});
