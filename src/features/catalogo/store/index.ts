import { Produto } from '@/services/api';

import { ProdutosEmCategoria } from '../types/categoria';
import { produtosPorCategoria } from '../utils';
import { create } from '@/shared/stores';

type CatalogoStoreState = {
  produtos: ProdutosEmCategoria;
  categorias: Array<keyof ProdutosEmCategoria>;
  categoriaSelecionada: keyof ProdutosEmCategoria | undefined;
};

type CatalogoStoreActions = {
  updateProdutos: (produtos: Produto[]) => void;
  updateCategoriaSelecionada: (
    categoriaSelecionada: CatalogoStoreState['categoriaSelecionada']
  ) => void;
};

export type CatalogoStore = CatalogoStoreState & CatalogoStoreActions;

const initialState: CatalogoStoreState = {
  categorias: [],
  categoriaSelecionada: undefined,
  produtos: {},
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
  updateCategoriaSelecionada: (categoriaSelecionada) => {
    set({
      ...get(),
      categoriaSelecionada,
    });
  },
}));
