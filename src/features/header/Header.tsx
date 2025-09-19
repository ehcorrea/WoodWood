import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useMemo } from 'react';
import { useNavigation } from '@react-navigation/native';

import { Text } from '@/shared/components';
import { carrinhoStore } from '@/shared/stores';

import { BotaoVoltar, Carrinho } from './components';
import { useGoBack } from './hooks';

import * as S from './Header.styles';

export default function Header() {
  const inserts = useSafeAreaInsets();
  const { navigate } = useNavigation();
  const produtos = carrinhoStore((state) => state.produtos);
  const { handleGoBack, mostrarVoltar } = useGoBack();
  const produtosTotais = useMemo(
    () =>
      Object.values(produtos).reduce((acc, cur) => {
        return acc + (cur?.quantidade || 0);
      }, 0),
    [produtos]
  );

  return (
    <S.Wrapper {...inserts}>
      {mostrarVoltar && (
        <S.ContainerBotaoVoltar
          onPress={() => handleGoBack()}
          accessibilityLabel="Voltar"
        >
          <BotaoVoltar />
        </S.ContainerBotaoVoltar>
      )}

      <Text.Title palette="white" maxFontSizeMultiplier={1} size="xhuge">
        woodwood
      </Text.Title>
      <S.ContainerCarrinho
        onPress={() => navigate('CarrinhoScreen')}
        accessibilityLabel={`Ir para o carrinho com ${produtosTotais} produtos`}
      >
        <Carrinho valor={produtosTotais} />
      </S.ContainerCarrinho>
    </S.Wrapper>
  );
}
