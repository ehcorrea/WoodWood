import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { Alert } from 'react-native';

import { listarProdutos } from '@/services/api';
import { ProdutosEmCategoria } from '../../types/categoria';
import { produtosPorCategoria } from '../../utils';

export function useListarProdutos() {
  const [produtos, setProdutos] = useState<undefined | ProdutosEmCategoria>(
    undefined
  );
  const { data, isLoading, refetch, isError } = useQuery({
    queryKey: ['listarProdutos'],
    queryFn: listarProdutos,
  });

  useEffect(() => {
    if (data && !isLoading) {
      setProdutos(produtosPorCategoria(data));
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

  return { produtos, isLoading };
}
