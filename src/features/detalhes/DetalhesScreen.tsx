import { ScrollView, View } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { NavigationParamList } from '@/navigators/RootNavigator.types';
import { Produto } from '@/services/api';
import { Spacing, Text } from '@/shared/components';
import { carrinhoStore } from '@/shared/stores';

import { useDetalhesProduto } from './hooks';

import * as S from './DetalhesScreen.styles';

export type DetalheScreen = RouteProp<NavigationParamList, 'DetalhesScreen'>;

export default function DetalhesScreen() {
  const route = useRoute<DetalheScreen>();
  const { bottom } = useSafeAreaInsets();
  const { adicionarProduto } = carrinhoStore();
  const { produto } = useDetalhesProduto(route.params);

  const handleAdicionarProduto = (produtoParaAdicionar: Produto) => {
    const { id, image, price, title } = produtoParaAdicionar;
    adicionarProduto({
      id,
      image,
      price,
      title,
    });
  };

  return (
    <S.Wrapper>
      <ScrollView
        bounces={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: bottom + 85 }}
      >
        <S.Image source={{ uri: produto?.image }} resizeMode="contain" />
        <Spacing y={10} />
        <View>
          <Text.Title size="xlarge">{produto?.title}</Text.Title>
          <Spacing y={10} />
          <Text.Subtitle>R$ {produto?.price}</Text.Subtitle>
          <Spacing y={10} />
          <Text>R$ {produto?.description}</Text>
          <Spacing y={10} />
        </View>
      </ScrollView>
      {produto && (
        <S.ButtonAdicionar
          bottom={bottom}
          onPress={() => handleAdicionarProduto(produto)}
        >
          <Text.Subtitle palette="white">Adicionar ao carrinho</Text.Subtitle>
        </S.ButtonAdicionar>
      )}
    </S.Wrapper>
  );
}
