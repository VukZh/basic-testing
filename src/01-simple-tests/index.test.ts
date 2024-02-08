// Uncomment the code below and write your tests
import { simpleCalculator, Action } from './index';

describe('simpleCalculator tests', () => {
  test('should add two numbers', () => {
    const sumResult = simpleCalculator({
      a: 1,
      b: 2,
      action: Action.Add,
    });
    expect(sumResult).toBe(3);
  });

  test('should subtract two numbers', () => {
    const subResult = simpleCalculator({
      a: 1,
      b: 2,
      action: Action.Subtract,
    });
    expect(subResult).toBe(-1);
  });

  test('should multiply two numbers', () => {
    const mulResult = simpleCalculator({
      a: 1,
      b: 2,
      action: Action.Multiply,
    });
    expect(mulResult).toBe(2);
  });

  test('should divide two numbers', () => {
    const divResult = simpleCalculator({
      a: 1,
      b: 2,
      action: Action.Divide,
    });
    expect(divResult).toBe(0.5);
  });

  test('should exponentiate two numbers', () => {
    const expResult = simpleCalculator({
      a: 2,
      b: 2,
      action: Action.Exponentiate,
    });
    expect(expResult).toBe(4);
  });

  test('should return null for invalid action', () => {
    const invalidActionResult = simpleCalculator({
      a: 1,
      b: 2,
      action: 1,
    });
    expect(invalidActionResult).toBe(null);
  });

  test('should return null for invalid arguments', () => {
    const invalidArgsResult = simpleCalculator({
      a: 'aas',
      b: true,
      action: Action.Add,
    });
    expect(invalidArgsResult).toBe(null);
  });
});
