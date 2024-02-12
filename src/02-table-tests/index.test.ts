import { simpleCalculator, Action } from './index';

const testCasesAdd = [
  { a: 1, b: 2, action: Action.Add, expected: 3 },
  { a: 2, b: 2, action: Action.Add, expected: 4 },
  { a: 3, b: 2, action: Action.Add, expected: 5 },
  { a: 0, b: 2, action: Action.Add, expected: 2 },
  { a: 110, b: 20, action: Action.Add, expected: 130 },
];

const testCasesSub = [
  { a: 1, b: 2, action: Action.Subtract, expected: -1 },
  { a: 2, b: 2, action: Action.Subtract, expected: 0 },
  { a: 3, b: 2, action: Action.Subtract, expected: 1 },
  { a: 0, b: 2, action: Action.Subtract, expected: -2 },
  { a: 110, b: 20, action: Action.Subtract, expected: 90 },
];

const testCasesMul = [
  { a: 1, b: 2, action: Action.Multiply, expected: 2 },
  { a: 2, b: 2, action: Action.Multiply, expected: 4 },
  { a: 3, b: 2, action: Action.Multiply, expected: 6 },
  { a: 0, b: 2, action: Action.Multiply, expected: 0 },
  { a: 110, b: 20, action: Action.Multiply, expected: 2200 },
];

const testCasesDiv = [
  { a: 1, b: 2, action: Action.Divide, expected: 0.5 },
  { a: 2, b: 2, action: Action.Divide, expected: 1 },
  { a: 3, b: 2, action: Action.Divide, expected: 1.5 },
  { a: 0, b: 2, action: Action.Divide, expected: 0 },
  { a: 110, b: 20, action: Action.Divide, expected: 5.5 },
];

const testCasesExp = [
  { a: 1, b: 2, action: Action.Exponentiate, expected: 1 },
  { a: 2, b: 2, action: Action.Exponentiate, expected: 4 },
  { a: 3, b: 2, action: Action.Exponentiate, expected: 9 },
  { a: 0, b: 2, action: Action.Exponentiate, expected: 0 },
  { a: 110, b: 2, action: Action.Exponentiate, expected: 12100 },
];

const testCasesInvalidArgs = [
  { a: true, b: 2, action: Action.Exponentiate, expected: null },
  { a: 2, b: '2', action: Action.Exponentiate, expected: null },
  { a: 3, b: '2', action: Action.Add, expected: null },
];

const testCasesInvalidActions = [
  { a: 2, b: 2, action: 'Action', expected: null },
  { a: 2, b: 0, action: {}, expected: null },
  { a: 3, b: 2, action: true, expected: null },
];

describe('simpleCalculator', () => {
  test.each(testCasesAdd)(
    'returns $expected when $a is added to $b',
    ({ a, b, action, expected }) => {
      expect(simpleCalculator({ a, b, action })).toBe(expected);
    },
  );

  test.each(testCasesSub)(
    'returns $expected when $a is subtracted to $b',
    ({ a, b, action, expected }) => {
      expect(simpleCalculator({ a, b, action })).toBe(expected);
    },
  );

  test.each(testCasesMul)(
    'returns $expected when $a is multiplied to $b',
    ({ a, b, action, expected }) => {
      expect(simpleCalculator({ a, b, action })).toBe(expected);
    },
  );

  test.each(testCasesDiv)(
    'returns $expected when $a is divided to $b',
    ({ a, b, action, expected }) => {
      expect(simpleCalculator({ a, b, action })).toBe(expected);
    },
  );

  test.each(testCasesExp)(
    'returns $expected when $a is raised to a power to $b',
    ({ a, b, action, expected }) => {
      expect(simpleCalculator({ a, b, action })).toBe(expected);
    },
  );

  test.each(testCasesInvalidArgs)(
    'should return null for invalid action and invalid arguments',
    ({ a, b, action, expected }) => {
      expect(simpleCalculator({ a, b, action })).toBe(expected);
    },
  );

  test.each(testCasesInvalidActions)(
    'should return null for invalid action and invalid arguments',
    ({ a, b, action, expected }) => {
      expect(simpleCalculator({ a, b, action })).toBe(expected);
    },
  );
});
