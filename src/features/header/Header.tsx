import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useMemo } from 'react';

import { Text } from '@/shared/components';
import { carrinhoStore } from '@/shared/stores';

import { Carrinho } from './components';

import * as S from './Header.styles';

export default function Header() {
  const inserts = useSafeAreaInsets();
  const produtos = carrinhoStore((state) => state.produtos);
  const produtosTotais = useMemo(
    () =>
      Object.values(produtos).reduce((acc, cur) => {
        return acc + (cur?.quantidade || 0);
      }, 0),
    [produtos]
  );

  return (
    <S.Wrapper {...inserts}>
      <Text.Title palette="white" maxFontSizeMultiplier={1} size="xhuge">
        woodwood
      </Text.Title>
      <S.ContainerCarrinho
        accessibilityLabel={`Ir para o carrinho com ${produtosTotais} produtos`}
      >
        <Carrinho valor={produtosTotais} />
      </S.ContainerCarrinho>
    </S.Wrapper>
  );
}
