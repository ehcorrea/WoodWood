import { Produto } from '@/services/api';

import { ProdutoDoCarrinho, ProdutoSimplificao } from '../types';
import { adicionarProduto, removerProduto } from '../utils';

import { create } from './create';

export type CarrinhoStoreState = {
  produtos: Record<Produto['id'], ProdutoDoCarrinho | undefined>;
  total: number;
};

type CarrinhoStoreActions = {
  adicionarProduto: (produto: ProdutoSimplificao) => void;
  removerProduto: (produto: ProdutoSimplificao) => void;
};

export type CarrinhoStore = CarrinhoStoreState & CarrinhoStoreActions;

const initialState: CarrinhoStoreState = {
  produtos: {},
  total: 0,
};

export const carrinhoStore = create<CarrinhoStore>((set, get) => ({
  ...initialState,
  adicionarProduto: (produto) => {
    const store = get();
    const { produtos, total } = store;
    const { produtoAtualizado, totalAtualizado } = adicionarProduto({
      produto,
      produtoListado: produtos[produto.id],
      total,
    });
    set({
      ...store,
      produtos: { ...produtos, [produto.id]: produtoAtualizado },
      total: totalAtualizado,
    });
  },
  removerProduto: (produto) => {
    const store = get();
    const { produtos, total } = store;
    const { produtoAtualizado, totalAtualizado } = removerProduto({
      produto,
      produtoListado: produtos[produto.id]!,
      total,
    });
    set({
      ...store,
      produtos: { ...produtos, [produto.id]: produtoAtualizado },
      total: totalAtualizado,
    });
  },
}));
