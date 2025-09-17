import { Produto } from '@/services/api';

import { ProdutosEmCategoria } from '../types/categoria';
import { produtosPorCategoria } from '../utils';
import { create } from '@/shared/stores';

type CatalogoStoreState = {
  produtos: ProdutosEmCategoria;
  categorias: Array<keyof ProdutosEmCategoria>;
};

type CatalogoStoreActions = {
  updateProdutos: (produtos: Produto[]) => void;
};

export type CatalogoStore = CatalogoStoreState & CatalogoStoreActions;

const initialState: CatalogoStoreState = {
  produtos: {},
  categorias: [],
};

export const catalogoStore = create<CatalogoStore>((set, get) => ({
  ...initialState,
  updateProdutos: (produtos) => {
    const produtosEmCategoria = produtosPorCategoria(produtos);
    set({
      ...get(),
      produtos: produtosEmCategoria,
      categorias: Object.keys(produtosEmCategoria),
    });
  },
}));
