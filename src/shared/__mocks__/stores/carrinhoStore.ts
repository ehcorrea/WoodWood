import { carrinhoStore, CarrinhoStore } from '../../stores';
import { mockedStore } from './store';

export const mockedCarrinhoStore = (storeValues?: Partial<CarrinhoStore>) =>
  mockedStore({
    store: carrinhoStore,
    storeValues: { ...carrinhoStore.getState(), ...storeValues },
  });
