import { generateLinkedList } from './index';

describe('generateLinkedList', () => {
  // Check match by expect(...).toStrictEqual(...)
  test('should generate linked list from values 1', () => {
    const elements1: Object[] = [{ a: 1 }, { a: 2 }, { b: 3 }, { c: { d: 4 } }];
    const generateLinkedList1 = generateLinkedList(elements1);
    const elements2 = [...elements1];
    const generateLinkedList2 = generateLinkedList(elements2);
    expect(generateLinkedList1).toStrictEqual(generateLinkedList2);
    elements2.pop();
    const generateLinkedList3 = generateLinkedList(elements2);
    expect(generateLinkedList3).not.toStrictEqual(generateLinkedList1);
    elements2.push({ c: { d: 4 } });
    const generateLinkedList4 = generateLinkedList(elements2);
    expect(generateLinkedList4).toStrictEqual(generateLinkedList1);
  });

  // Check match by comparison with snapshot
  test('should generate linked list from values 2', () => {
    const elements3: Object[] = [
      { c: 11 },
      { field1: 22 },
      { b: 3 },
      { c: { d: '_4' } },
    ];
    const generateLinkedList1 = generateLinkedList(elements3);
    expect(generateLinkedList1).toMatchSnapshot('object');
    const elements4 = [...elements3];
    const generateLinkedList2 = generateLinkedList(elements4);
    expect(generateLinkedList2).toMatchSnapshot('object');

    const elements5: Number[] = [11, 222, 333, 4444];
    const generateLinkedList3 = generateLinkedList(elements5);
    expect(generateLinkedList3).toMatchSnapshot('number');
    const elements6 = [...elements5];
    const generateLinkedList4 = generateLinkedList(elements6);
    expect(generateLinkedList4).toMatchSnapshot('number');
  });
});
