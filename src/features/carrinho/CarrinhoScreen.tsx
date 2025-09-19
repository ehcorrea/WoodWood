import { FlatList } from 'react-native';
import { useCallback, useMemo } from 'react';

import { carrinhoStore } from '@/shared/stores';
import { Spacing, Text } from '@/shared/components';
import { ProdutoDoCarrinho } from '@/shared/types';

import { CardProduto, CarrinhoVazio } from './components';
import * as S from './CarrinhoScreen.styles';

export default function CarrinhoScreen() {
  const { adicionarProduto, produtos, total, removerProduto } = carrinhoStore();

  const data = useMemo(() => {
    return Object.values(produtos).filter((item) => !!item);
  }, [produtos]);

  const _renderItem = useCallback(
    ({ item }: { item: ProdutoDoCarrinho }) => (
      <CardProduto
        onAdicionar={adicionarProduto}
        onRemover={removerProduto}
        produto={item}
      />
    ),
    []
  );

  return (
    <S.Wrapper>
      {data.length ? (
        <S.ContainerList>
          <FlatList
            keyExtractor={(item) => String(item.id)}
            style={{ flex: 1 }}
            ItemSeparatorComponent={() => <Spacing y={10} />}
            data={data}
            renderItem={_renderItem}
          />
        </S.ContainerList>
      ) : (
        <CarrinhoVazio />
      )}
      {!!total && (
        <S.ContainerFooter>
          <Text>Total: R$ {total.toFixed(2)}</Text>
        </S.ContainerFooter>
      )}
    </S.Wrapper>
  );
}
