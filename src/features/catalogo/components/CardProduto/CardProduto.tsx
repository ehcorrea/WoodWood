import { Produto } from '@/services/api';
import { Text } from '@/shared/components';

import * as S from './CardProduto.styles';

type CardProdutoProps = {
  produto: Produto;
};

export function CardProduto({ produto }: CardProdutoProps) {
  return (
    <S.Wrapper>
      <S.ContainerPreco>
        <S.Preco weight="semibold" maxFontSizeMultiplier={1}>
          R$ {produto.price}
        </S.Preco>
      </S.ContainerPreco>
      <S.Image source={{ uri: produto.image }} resizeMode="contain" />
      <S.Titulo numberOfLines={2}>
        {produto.title}
        {'\n'}
      </S.Titulo>
      <S.FakeButton>
        <Text palette="white" size="large" weight="semibold">
          Ver detalhes
        </Text>
      </S.FakeButton>
    </S.Wrapper>
  );
}
