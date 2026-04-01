import { getFormattedQuery } from './formatQuery';

describe('getFormattedQuery', () => {
  test('formats query by trimming and converting to lowercase', () => {
    const result = getFormattedQuery('    jAPan        ');
    expect(result).toBe('japan');
  });
});
