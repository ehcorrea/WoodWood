import { renderHook, waitFor } from '@testing-library/react-native';
import { Alert } from 'react-native';

import { sleep, TestProvider, mockedApi, MOCKED_PRODUTOS } from '@/test/utils';

import { useListarProdutos } from './useListarProdutos';

jest.useFakeTimers();
jest.spyOn(Alert, 'alert');

const setup = () => renderHook(useListarProdutos, { wrapper: TestProvider });

describe('useListarProdutos', () => {
  describe('quando renderizado', () => {
    test('e requisição aguarda conclusão', () => {
      mockedApi.listarProdutos.mockImplementationOnce(async () => {
        await sleep(1000);
        return MOCKED_PRODUTOS;
      });
      const hook = setup().result;
      expect(hook.current.isLoading).toBeTruthy();
      expect(hook.current.produtos).toEqual(undefined);
    });
    describe('e requisição concluida', () => {
      test('com erro', async () => {
        mockedApi.listarProdutos.mockRejectedValueOnce(() => {
          return new Error('Generic Error');
        });
        const hook = setup().result;
        await waitFor(() => {
          expect(hook.current.isLoading).toBeFalsy();
        });
        expect(Alert.alert).toHaveBeenCalledWith('Error', 'Tentar Novamente?', [
          { onPress: expect.any(Function), text: 'Sim' },
          { text: 'Não' },
        ]);
      });
      test('com sucesso', async () => {
        mockedApi.listarProdutos.mockResolvedValueOnce(MOCKED_PRODUTOS);
        const hook = setup().result;
        await waitFor(() => {
          expect(hook.current.isLoading).toBeFalsy();
        });
        expect(hook.current.produtos).toEqual(MOCKED_PRODUTOS);
      });
    });
  });
});
