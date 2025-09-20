import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import { Alert } from 'react-native';

import { listarProdutos } from '../../services/api';
import { catalogoStore } from '../../store';

export function useListarProdutos() {
  const updateProdutos = catalogoStore((state) => state.updateProdutos);
  const { data, isLoading, refetch, isError } = useQuery({
    queryKey: ['listarProdutos'],
    queryFn: listarProdutos,
  });

  useEffect(() => {
    if (data && !isLoading) {
      updateProdutos(data);
    }
  }, [data, isLoading]);

  useEffect(() => {
    if (isError) {
      Alert.alert('Error', 'Tentar Novamente?', [
        { text: 'Sim', onPress: () => refetch() },
        { text: 'Não' },
      ]);
    }
  }, [isError]);

  return { isLoading };
}
