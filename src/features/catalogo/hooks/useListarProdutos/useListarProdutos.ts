import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import { Alert } from 'react-native';
import { listarProdutos } from '../../api/api';

export function useListarProdutos() {
  const { data, isFetching, refetch, isError } = useQuery({
    queryKey: ['listarProdutos'],
    queryFn: listarProdutos,
  });

  useEffect(() => {
    if (isError) {
      Alert.alert('Error', 'Tentar Novamente?', [
        { text: 'Sim', onPress: () => refetch() },
        { text: 'Não' },
      ]);
    }
  }, [isError]);

  return { produtos: data, isLoading: isFetching };
}
