import { rfvalue, rhvalue, rwvalue } from './responsive';

describe('rfvalue', () => {
  test('quando executado', () => {
    const value = rfvalue(20);
    expect(value).toBe(28.5);
  });
});

describe('rhvalue', () => {
  test('quando executado', () => {
    const value = rhvalue(20);
    expect(value).toBe(34);
  });
});

describe('rwvalue', () => {
  test('quando executado', () => {
    const value = rwvalue(20);
    expect(value).toBe(37);
  });
});
