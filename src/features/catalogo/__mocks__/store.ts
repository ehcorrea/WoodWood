import { mockedStore } from '@/shared/__mocks__';

import { catalogoStore, CatalogoStore } from '../store';

export const mockedCatalagoStore = (storeValues?: Partial<CatalogoStore>) =>
  mockedStore({
    store: catalogoStore,
    storeValues: { ...catalogoStore.getState(), ...storeValues },
  });
