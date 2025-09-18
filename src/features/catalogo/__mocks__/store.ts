import { catalogoStore, CatalogoStore } from '../store';

import { mockedStore } from '@/test/__mocks__';

export const mockedCatalagoStore = (storeValues?: Partial<CatalogoStore>) =>
  mockedStore({
    store: catalogoStore,
    storeValues: { ...catalogoStore.getState(), ...storeValues },
  });
