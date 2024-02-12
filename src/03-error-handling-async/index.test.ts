import {
  throwError,
  throwCustomError,
  resolveValue,
  MyAwesomeError,
  rejectCustomError,
} from './index';

describe('resolveValue', () => {
  test('should resolve provided value', async () => {
    const val = {
      field1: 1,
      field2: '2',
    };
    const result = await resolveValue(val);
    expect(result).toBe(val);
  });
});

describe('throwError', () => {
  test('should throw error with provided message', () => {
    const msg = 'my super message';
    expect(() => throwError(msg)).toThrow(msg);
  });

  test('should throw error with default message if message is not provided', () => {
    const msg = 'Oops!';
    expect(() => throwError()).toThrow(msg);
  });
});

describe('throwCustomError', () => {
  test('should throw custom error', () => {
    expect(() => throwCustomError()).toThrow(new MyAwesomeError());
  });
});

describe('rejectCustomError', () => {
  test('should reject custom error', async () => {
    await expect(rejectCustomError()).rejects.toThrow(new MyAwesomeError());
  });
});
