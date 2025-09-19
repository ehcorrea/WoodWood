import { CarrinhoStore, carrinhoStore } from '@/shared/stores';
import { mockedStore } from '@/test/__mocks__';

export const mockedCarrinhoStore = (storeValues?: Partial<CarrinhoStore>) =>
  mockedStore({
    store: carrinhoStore,
    storeValues: { ...carrinhoStore.getState(), ...storeValues },
  });
