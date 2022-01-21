import { convertToPersian, convertToEnglish, currencyForm } from '../src';

test('toPersian is ok?', () => {
  expect(convertToPersian('<p>testValue123</p>')).toBe('<p>testValue۱۲۳</p>');
  expect(convertToPersian(null)).toBe('');
  expect(convertToPersian(undefined)).toBe('');
});

test('toEnglish is ok?', () => {
  expect(convertToEnglish('<p>testValue۱۲۳</p>')).toBe('<p>testValue123</p>');
  expect(convertToEnglish(null)).toBe('');
  expect(convertToEnglish(undefined)).toBe('');
});

test('currencyForm is ok?', () => {
  expect(currencyForm('1000000')).toBe(convertToPersian('1,000,000'));
});
