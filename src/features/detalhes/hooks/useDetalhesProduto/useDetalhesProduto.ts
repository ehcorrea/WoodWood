import { useEffect } from 'react';
import { Alert } from 'react-native';
import { useQuery } from '@tanstack/react-query';

import { detalhesProduto } from '@/services/api';

export type UseDetalhesProdutoArgs = {
  id: number;
};

export function useDetalhesProduto({ id }: UseDetalhesProdutoArgs) {
  const { data, isError, refetch, isLoading } = useQuery({
    queryKey: ['detalhes-produto', id],
    queryFn: () => detalhesProduto({ id }),
  });

  useEffect(() => {
    if (isError) {
      Alert.alert('Error', 'Tentar Novamente?', [
        { text: 'Sim', onPress: () => refetch() },
        { text: 'Não' },
      ]);
    }
  }, [isError]);

  return { produto: data, isLoading };
}
