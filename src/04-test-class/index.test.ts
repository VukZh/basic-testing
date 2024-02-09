import { getBankAccount } from '.';

describe('BankAccount', () => {
  test('should create account with initial balance', () => {
    const balance = 1000;
    const newAcc = getBankAccount(balance);
    expect(newAcc.getBalance()).toBe(balance);
  });

  test('should throw InsufficientFundsError error when withdrawing more than balance', () => {
    const balance = 1000;
    const newAcc = getBankAccount(balance);
    expect(() => newAcc.withdraw(balance + 1)).toThrow(
      `Insufficient funds: cannot withdraw more than ${balance}`,
    );
  });

  test('should throw error when transferring more than balance', () => {
    const balance = 1000;
    const newAcc = getBankAccount(balance);
    const newAcc2 = getBankAccount(100);
    expect(() => newAcc.transfer(balance + 1, newAcc2)).toThrow(
      `Insufficient funds: cannot withdraw more than ${balance}`,
    );
  });

  test('should throw error when transferring to the same account', () => {
    const balance = 1000;
    const newAcc = getBankAccount(balance);
    expect(() => newAcc.transfer(balance, newAcc)).toThrow(`Transfer failed`);
  });

  test('should deposit money', () => {
    const balance = 1000;
    const deposit = 100;
    const newAcc = getBankAccount(balance);
    newAcc.deposit(deposit);
    expect(newAcc.getBalance()).toBe(balance + deposit);
  });

  test('should withdraw money', () => {
    const balance = 1000;
    const withdraw = 100;
    const newAcc = getBankAccount(balance);
    newAcc.withdraw(withdraw);
    expect(newAcc.getBalance()).toBe(balance - withdraw);
  });

  test('should transfer money', () => {
    const balance = 1000;
    const transfer = 100;
    const newAcc = getBankAccount(balance);
    const newAcc2 = getBankAccount(balance);
    newAcc.transfer(transfer, newAcc2);
    expect(newAcc.getBalance()).toBe(balance - transfer);
    expect(newAcc2.getBalance()).toBe(balance + transfer);
  });

  test('fetchBalance should return number in case if request did not failed', async () => {
    const newAcc = getBankAccount(100);
    const fakedFetchBalance = jest.spyOn(newAcc, 'fetchBalance');
    fakedFetchBalance.mockResolvedValue(10);
    await newAcc.synchronizeBalance();
    expect(typeof newAcc.getBalance()).toBe('number');
  });

  test('should set new balance if fetchBalance returned number', async () => {
    const newAcc = getBankAccount(100);
    const fakedFetchBalance = jest.spyOn(newAcc, 'fetchBalance');
    fakedFetchBalance.mockResolvedValue(10);
    await newAcc.synchronizeBalance();
    expect(newAcc.getBalance()).toBe(10);
  });

  test('should throw SynchronizationFailedError if fetchBalance returned null', async () => {
    const newAcc = getBankAccount(100);
    const fakedFetchBalance = jest.spyOn(newAcc, 'fetchBalance');
    fakedFetchBalance.mockResolvedValue(null);
    await expect(newAcc.synchronizeBalance()).rejects.toThrow(
      'Synchronization failed',
    );
  });
});
