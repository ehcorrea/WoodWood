import { act } from 'react-test-renderer';
import { StoreApi, UseBoundStore } from 'zustand';

export type DeepPartial<T> = T extends object
  ? {
      [P in keyof T]?: DeepPartial<T[P]>;
    }
  : T;

export type MockedStore<T> = {
  store: UseBoundStore<StoreApi<T>>;
  storeValues: DeepPartial<T>;
};

export const mockedStore = <T>({ store, storeValues }: MockedStore<T>) => {
  act(() => {
    store.setState(storeValues as T, true);
  });
};
