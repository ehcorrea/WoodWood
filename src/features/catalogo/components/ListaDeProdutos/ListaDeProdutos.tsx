import { Pressable, FlatList } from 'react-native';
import { useCallback, useMemo } from 'react';
import { useNavigation } from '@react-navigation/native';

import { Produto } from '@/services/api';
import { Spacing } from '@/shared/components';

import { catalogoStore } from '../../store';

import { CardProduto } from '../CardProduto/CardProduto';

export function ListaDeProdutos() {
  const { categoriaSelecionada, produtos } = catalogoStore();
  const { navigate } = useNavigation();

  const data = useMemo(() => {
    return categoriaSelecionada
      ? produtos[categoriaSelecionada]
      : Object.values(produtos).flat();
  }, [produtos, categoriaSelecionada]);

  const _renderItem = useCallback(
    ({ item }: { item: Produto }) => (
      <Pressable
        style={{ flex: 1 }}
        accessibilityLabel={`Ver detalhes sobre ${item.title}`}
        onPress={() => navigate('DetalhesScreen', { id: item.id })}
      >
        <CardProduto produto={item} />
      </Pressable>
    ),
    []
  );

  return (
    <FlatList
      key={String(categoriaSelecionada)}
      data={data}
      keyExtractor={(item) => String(item.id)}
      ItemSeparatorComponent={() => <Spacing y={10} />}
      showsVerticalScrollIndicator={false}
      renderItem={_renderItem}
      numColumns={2}
    />
  );
}
