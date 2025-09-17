import { mocked } from 'jest-mock';
import * as api from '@/services/api';

jest.mock('@/services/api');

export const mockedApi = mocked(api);
