import { useEffect } from 'react';
import { Alert } from 'react-native';
import { useQuery } from '@tanstack/react-query';

import { detalhesProduto, Produto } from '@/services/api';

export type UseDetalhesProdutoArgs =
  | {
      produto: Produto;
      id?: string;
    }
  | {
      produto?: undefined;
      id: string;
    };

export function useDetalhesProduto({ id, produto }: UseDetalhesProdutoArgs) {
  const { data, isError, refetch, isLoading } = useQuery({
    queryKey: ['detalhes-produto', id, produto?.id],
    queryFn: () => detalhesProduto({ id: id || String(produto?.id) }),
    enabled: !!id && !produto,
    initialData: produto,
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
