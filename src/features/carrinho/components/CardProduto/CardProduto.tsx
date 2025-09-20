import { TouchableOpacity } from 'react-native';

import { ProdutoDoCarrinho } from '@/shared/types';
import { Spacing, Text } from '@/shared/components';

import { IconAdd, IconRemove } from '../../assets/icons';

import * as S from './CardProduto.styles';

type CardProdutoProps = {
  produto: ProdutoDoCarrinho;
  onAdicionar: (prduto: ProdutoDoCarrinho) => void;
  onRemover: (prduto: ProdutoDoCarrinho) => void;
};

export function CardProduto({
  produto,
  onAdicionar,
  onRemover,
}: CardProdutoProps) {
  const handlePressRemover = () => {
    onRemover(produto);
  };

  const handlePressAdicionar = () => {
    onAdicionar(produto);
  };

  return (
    <S.Wrapper>
      <S.Image
        source={{ uri: produto.image }}
        testID="image"
        resizeMode="contain"
      />
      <Spacing x={5} />
      <S.ContainerInfos>
        <Text.Subtitle numberOfLines={1}>{produto.title}</Text.Subtitle>
        <Spacing y={5} />
        <Text numberOfLines={2}>
          {produto.quantidade} x R$ {produto.price.toFixed(2)}
        </Text>
        <Spacing y={5} />
        <Text numberOfLines={2}>
          Total:{' '}
          <Text.Subtitle numberOfLines={1}>
            R${produto.total.toFixed(2)}
          </Text.Subtitle>
        </Text>
      </S.ContainerInfos>
      <Spacing x={5} />
      <S.ContainerButtons>
        <TouchableOpacity
          accessibilityLabel={`Adicionar mais uma unidade de ${produto.title}`}
          onPress={handlePressAdicionar}
        >
          <IconAdd width={35} height={35} />
        </TouchableOpacity>
        <S.Line />
        <TouchableOpacity
          accessibilityLabel={`Remover uma unidade de ${produto.title}`}
          onPress={handlePressRemover}
        >
          <IconRemove width={35} height={35} />
        </TouchableOpacity>
      </S.ContainerButtons>
    </S.Wrapper>
  );
}
