// Uncomment the code below and write your tests
import axios from 'axios';
import { throttledGetDataFromApi } from './index';

jest.mock('axios');
beforeAll(() => {
  jest.useFakeTimers();
});

afterAll(() => {
  jest.useRealTimers();
  jest.clearAllMocks();
});

beforeEach(() => {
  jest.clearAllMocks();
});

describe('throttledGetDataFromApi', () => {
  test('should create instance with provided base url', async () => {
    const mockResponseData = { data: 'some data' };
    (axios.create as jest.Mock).mockReturnValue({
      get: jest.fn().mockResolvedValue(mockResponseData),
    });
    await throttledGetDataFromApi('');
    expect(axios.create).toHaveBeenCalledWith({
      baseURL: 'https://jsonplaceholder.typicode.com',
    });
  });

  test('should perform request to correct provided url', async () => {
    jest.advanceTimersByTime(5000);
    const relativePath = '/id=123';
    const mockResponseData = { data: '' };
    (axios.create as jest.Mock).mockReturnValue({
      get: jest.fn().mockResolvedValue(mockResponseData),
    });
    await throttledGetDataFromApi(relativePath);
    expect(axios.create().get).toHaveBeenCalledWith(relativePath);
    throttledGetDataFromApi(relativePath);
    throttledGetDataFromApi(relativePath);
    expect(axios.create().get).toHaveBeenCalledTimes(1);
    throttledGetDataFromApi(relativePath);
    jest.advanceTimersByTime(5000);
    expect(axios.create().get).toHaveBeenCalledTimes(2);
  });

  test('should return response data', async () => {
    jest.advanceTimersByTime(5000);
    const mockResponseData = { data: 'some data from some url' };
    (axios.create as jest.Mock).mockReturnValue({
      get: jest.fn().mockResolvedValue(mockResponseData),
    });
    const result = await throttledGetDataFromApi('/some');
    expect(result).toBe('some data from some url');
  });
});
