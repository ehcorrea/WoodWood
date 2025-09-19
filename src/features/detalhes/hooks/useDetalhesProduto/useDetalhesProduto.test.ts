import { renderHook, waitFor } from '@testing-library/react-native';
import { Alert } from 'react-native';

import { sleep, TestProvider, mockedApi, criarMockProduto } from '@/test/utils';

import {
  useDetalhesProduto,
  UseDetalhesProdutoArgs,
} from './useDetalhesProduto';

jest.useFakeTimers();
jest.spyOn(Alert, 'alert');

const produto = criarMockProduto();

const setup = (args: UseDetalhesProdutoArgs) => {
  return renderHook(() => useDetalhesProduto(args), { wrapper: TestProvider });
};

describe('useDetalhesProduto', () => {
  describe('quando renderizado', () => {
    describe('com id', () => {
      describe('e sem produto', () => {
        test('e requisição aguardando conclusão', () => {
          mockedApi.detalhesProduto.mockImplementationOnce(async () => {
            await sleep(1000);
            return produto;
          });
          const hook = setup({ id: '1' }).result;
          expect(hook.current.isLoading).toBeTruthy();
          expect(hook.current.produto).toBeUndefined();
        });
        describe('e requisição concluida', () => {
          test('com erro', async () => {
            mockedApi.detalhesProduto.mockRejectedValueOnce(() => {
              return new Error('Generic Error');
            });
            const hook = setup({ id: '1' }).result;
            await waitFor(() => {
              expect(hook.current.isLoading).toBeFalsy();
              expect(hook.current.produto).toBeUndefined();
            });
            expect(Alert.alert).toHaveBeenCalledWith(
              'Error',
              'Tentar Novamente?',
              [{ onPress: expect.any(Function), text: 'Sim' }, { text: 'Não' }]
            );
          });
          test('com sucesso', async () => {
            mockedApi.detalhesProduto.mockResolvedValueOnce(produto);
            const hook = setup({ id: 'id' }).result;
            await waitFor(() => {
              expect(hook.current.isLoading).toBeFalsy();
              expect(hook.current.produto).toEqual(produto);
            });
          });
        });
      });
      test('e com produto', () => {
        const mockedRequest = jest.fn();
        mockedApi.detalhesProduto.mockImplementationOnce(async () => {
          mockedRequest();
          return produto;
        });
        const hook = setup({ id: 'id', produto }).result;
        expect(mockedRequest).not.toHaveBeenCalled();
        expect(hook.current.isLoading).toBeFalsy();
        expect(hook.current.produto).toEqual(produto);
      });
    });
  });
});
