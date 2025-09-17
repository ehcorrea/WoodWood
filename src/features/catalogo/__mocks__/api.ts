import { mocked } from 'jest-mock';
import * as api from '../api/api';

jest.mock('../api/api');

export const mockedApi = mocked(api);
