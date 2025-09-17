import { Produto } from '@/services/api';

import { ProdutosEmCategoria } from '../../types/categoria';

export function produtosPorCategoria(produtos: Produto[]): ProdutosEmCategoria {
  return produtos.reduce<Record<string, Produto[]>>((acc, cur) => {
    acc[cur.category] = [...(acc[cur.category] || []), cur];
    return acc;
  }, {});
}
