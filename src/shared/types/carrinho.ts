import { Produto } from '@/services/api';

export type ProdutoSimplificao = Omit<
  Produto,
  'rating' | 'description' | 'category'
>;

export type ProdutoDoCarrinho = ProdutoSimplificao & {
  quantidade: number;
  total: number;
};
