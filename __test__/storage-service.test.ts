import ls from '../../../utils/storage-service';

describe('LS should work for single operations ', () => {
  const singleKey = 'singleKey';
  const createItem = (value) => ls.set(singleKey, value);

  it('number', () => {
    createItem(7);
    expect(ls.get(singleKey)).toBe(7);
  });

  it('string', () => {
    createItem('itValue');
    expect(ls.get(singleKey)).toBe('itValue');
  });

  it('null', () => {
    createItem(null);
    expect(ls.get(singleKey)).toBe(null);
  });

  it('undefined', () => {
    createItem(undefined);
    expect(ls.get(singleKey)).toBe('undefined');
  });

  it('object', () => {
    const MOCK_OBJECT = [{ name: 'John Doe', isDeveloper: true, city: null, info: { age: 16 } }];
    createItem(MOCK_OBJECT);
    expect(ls.get(singleKey)).toStrictEqual(MOCK_OBJECT);
  });

  it('remove', () => {
    ls.remove(singleKey);
    expect(ls.get(singleKey)).toStrictEqual(null);
  });
});

//------------------------------------------------------------------
describe('LS should work for multiple operations ', () => {
  const multiKey = 'multiKey';
  const items = { name: 'John', family: 'Doe', info: { age: 16 } };
  const keys = Object.keys(items);
  ls.setMultiple(items);

  it('getMultiple', () => {
    const multiResult = ls.getMultiple(keys);
    const allResult = ls.getAll();

    expect(multiResult).toStrictEqual(items);
    expect(allResult).toStrictEqual(items);
  });

  it('removeMultiple', () => {
    ls.removeMultiple(keys);
    expect(ls.getAll()).toStrictEqual({});
  });

  it('removeAll', () => {
    ls.removeAll();
    expect(ls.getAll()).toStrictEqual({});
  });
});

//------------------------------------------------------------------
describe('LS internal should work', () => {
  const { checkPrimitive, checkJSON } = ls;

  it('checkPrimitive', () => {
    expect(checkPrimitive(null)).toBe(true);
    expect(checkPrimitive(true)).toBe(true);
    expect(checkPrimitive('string')).toBe(true);
    expect(checkPrimitive(7)).toBe(true);
    expect(checkPrimitive(Symbol('id'))).toBe(true);
    expect(checkPrimitive(() => {})).toBe(false);
    expect(checkPrimitive({})).toBe(false);
  });

  it('checkJSON', () => {
    expect(checkJSON('random-string')).toBe(false);
    expect(checkJSON(JSON.stringify({ key: 'value' }))).toBe(true);
  });
});
