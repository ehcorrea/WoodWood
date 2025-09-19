import { renderHook, waitFor } from '@testing-library/react-native';
import { Alert } from 'react-native';

import { sleep, TestProvider, mockedApi, criarMockProduto } from '@/test/utils';

import { useDetalhesProduto } from './useDetalhesProduto';

jest.useFakeTimers();
jest.spyOn(Alert, 'alert');

const produto = criarMockProduto();

const setup = () => {
  return renderHook(() => useDetalhesProduto({ id: 0 }), {
    wrapper: TestProvider,
  });
};

describe('useDetalhesProduto', () => {
  describe('quando renderizado', () => {
    test('e requisição aguardando conclusão', () => {
      mockedApi.detalhesProduto.mockImplementationOnce(async () => {
        await sleep(1000);
        return produto;
      });
      const hook = setup().result;
      expect(hook.current.isLoading).toBeTruthy();
      expect(hook.current.produto).toBeUndefined();
    });
    describe('e requisição concluida', () => {
      test('com erro', async () => {
        mockedApi.detalhesProduto.mockRejectedValueOnce(() => {
          return new Error('Generic Error');
        });
        const hook = setup().result;
        await waitFor(() => {
          expect(hook.current.isLoading).toBeFalsy();
          expect(hook.current.produto).toBeUndefined();
        });
        expect(Alert.alert).toHaveBeenCalledWith('Error', 'Tentar Novamente?', [
          { onPress: expect.any(Function), text: 'Sim' },
          { text: 'Não' },
        ]);
      });
      test('com sucesso', async () => {
        mockedApi.detalhesProduto.mockResolvedValueOnce(produto);
        const hook = setup().result;
        await waitFor(() => {
          expect(hook.current.isLoading).toBeFalsy();
          expect(hook.current.produto).toEqual(produto);
        });
      });
    });
  });
});
