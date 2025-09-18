import { Pressable, FlatList } from 'react-native';
import { useMemo } from 'react';
import { useNavigation } from '@react-navigation/native';

import { Spacing } from '@/shared/components';

import { catalogoStore } from '../../store';

import { CardProduto } from '../CardProduto/CardProduto';

export function ListaDeProdutos() {
  const { categoriaSelecionada, produtos } = catalogoStore();
  const { navigate } = useNavigation();

  const lista = useMemo(() => {
    return categoriaSelecionada
      ? produtos[categoriaSelecionada]
      : Object.values(produtos).flat();
  }, [produtos, categoriaSelecionada]);

  return (
    <FlatList
      data={lista}
      ItemSeparatorComponent={() => <Spacing y={10} />}
      showsVerticalScrollIndicator={false}
      renderItem={({ item }) => (
        <Pressable
          key={item.id}
          style={{ flex: 1 }}
          accessibilityLabel={`Ver detalhes sobre ${item.title}`}
          onPress={() => navigate('DetalhesScreen', { produto: item })}
        >
          <CardProduto produto={item} />
        </Pressable>
      )}
      numColumns={2}
    />
  );
}
