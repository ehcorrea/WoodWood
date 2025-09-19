import { ProdutoDoCarrinho, ProdutoSimplificao } from '../../types/carrinho';

type AdicionarProdutoArgs = {
  produto: ProdutoSimplificao;
  produtoListado: ProdutoDoCarrinho | undefined;
  total: number;
};

type AdicionarProduto = {
  produtoAtualizado: ProdutoDoCarrinho;
  totalAtualizado: number;
};

const PRODUTO_INICAL = {
  total: 0,
  quantidade: 0,
};

export function adicionarProduto({
  produto,
  produtoListado,
  total,
}: AdicionarProdutoArgs): AdicionarProduto {
  const produtoJaListado = produtoListado || { ...produto, ...PRODUTO_INICAL };
  const totalAtualizado = total + produto.price;
  const produtoAtualizado: ProdutoDoCarrinho = {
    ...produtoJaListado,
    quantidade: produtoJaListado.quantidade + 1,
    total: produtoJaListado.total + produto.price,
  };

  return {
    totalAtualizado,
    produtoAtualizado,
  };
}

type RemoverProdutoArgs = {
  produto: ProdutoSimplificao;
  produtoListado: ProdutoDoCarrinho;
  total: number;
};

type RemoverProduto = {
  produtoAtualizado: ProdutoDoCarrinho | undefined;
  totalAtualizado: number;
};

export function removerProduto({
  produto,
  produtoListado,
  total,
}: RemoverProdutoArgs): RemoverProduto {
  const totalAtualizado = total - produto.price;
  const produtoAtualizado: ProdutoDoCarrinho = {
    ...produtoListado,
    quantidade: produtoListado.quantidade - 1,
    total: produtoListado.total - produto.price,
  };

  return {
    totalAtualizado,
    produtoAtualizado:
      produtoAtualizado.quantidade === 0 ? undefined : produtoAtualizado,
  };
}
