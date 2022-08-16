import Validator from "../js/domain";

test('корректность работы валидатора - допустимы только латинские буквы, символы тире -, подчёркивания _ и цифры (0-9)', () => {

  const input = "Red-41-14_red";
  const expected = true;
  const received = (new Validator).validateUsername(input);

  expect(received).toBe(expected);
});

test('корректность работы валидатора - допустимы только латинские буквы, символы тире -, подчёркивания _ и цифры (0-9)', () => {

  const input = "Крепкий-25";
  const expected = false;
  const received = (new Validator).validateUsername(input);

  expect(received).toBe(expected);
});

test('корректность работы валидатора - имя не должно содержать подряд более трёх цифр', () => {

  const input = "Red-41-1444_red";
  const expected = false;
  const received = (new Validator).validateUsername(input);

  expect(received).toBe(expected);
});

test('корректность работы валидатора - имя не должно начинаться цифрами', () => {

  const input = "1Red-41-14_red";
  const expected = false;
  const received = (new Validator).validateUsername(input);

  expect(received).toBe(expected);
});

test('корректность работы валидатора - имя не должно заканчиваться цифрами', () => {

  const input = "Red-41-14_red1";
  const expected = false;
  const received = (new Validator).validateUsername(input);

  expect(received).toBe(expected);
});

test('корректность работы валидатора - имя не должно начинаться символом подчёркивания', () => {

  const input = "_Red-41-14_red";
  const expected = false;
  const received = (new Validator).validateUsername(input);

  expect(received).toBe(expected);
});

test('корректность работы валидатора - имя не должно заканчиваться символом подчёркивания', () => {

  const input = "Red-41-14_red_";
  const expected = false;
  const received = (new Validator).validateUsername(input);

  expect(received).toBe(expected);
});

test('корректность работы валидатора - имя не должно начинаться символом тире', () => {

  const input = "-Red-41-14_red";
  const expected = false;
  const received = (new Validator).validateUsername(input);

  expect(received).toBe(expected);
});

test('корректность работы валидатора - имя не должно заканчиваться символом тире', () => {

  const input = "Red-41-14_red-";
  const expected = false;
  const received = (new Validator).validateUsername(input);

  expect(received).toBe(expected);
});