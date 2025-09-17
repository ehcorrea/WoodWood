import { create as _create, StateCreator } from 'zustand';

export const storeResetFns = new Set<() => void>();

export const resetStores = () => {
  storeResetFns.forEach((resetFn) => {
    resetFn();
  });
};

export const create = (<T>(stateCreator: StateCreator<T>) => {
  const store = _create(stateCreator);
  const initialState = store.getState();
  storeResetFns.add(() => {
    store.setState(initialState, true);
  });
  return store;
}) as typeof _create;
