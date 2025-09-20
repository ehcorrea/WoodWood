import { FlatList, TouchableOpacity } from 'react-native';

import { Spacing } from '@/shared/components';

import { IconClose } from '../../assets/icons';
import { catalogoStore } from '../../store';
import { Pill } from '../Pill/Pill';

import * as S from './Categorias.style';

export function Categorias() {
  const { categorias, categoriaSelecionada, updateCategoriaSelecionada } =
    catalogoStore();

  const handlePressPill = (categoria?: string) => {
    updateCategoriaSelecionada(categoria);
  };

  return (
    <S.Wraper>
      {categoriaSelecionada && (
        <>
          <S.ContainerIcon
            hitSlop={30}
            onPress={() => handlePressPill()}
            accessibilityLabel={`Limpar filtro de ${categoriaSelecionada}`}
          >
            <IconClose width={25} height={25} stroke="white" />
          </S.ContainerIcon>
          <Spacing x={5} />
        </>
      )}
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        ItemSeparatorComponent={() => <Spacing x={5} />}
        data={categorias}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => handlePressPill(item)}
            key={item}
            accessibilityLabel={`Filtrar por ${item}`}
          >
            <Pill categoriaSelecionada={categoriaSelecionada} label={item} />
          </TouchableOpacity>
        )}
      />
    </S.Wraper>
  );
}
