import { test } from "@jest/globals";
import * as operations from "./index";

test('Test texto: given "Hello", it should return "Hello"', () => {
  expect(operations.texto('Hello')).toStrictEqual('Hello');
});

test('Test texto: given 123, it should return 123', () => {
  expect(operations.texto(123)).toStrictEqual(123);
});

test('Test suma: given 1 and 2, it should return 3', () => {
  expect(operations.suma(1, 2)).toBe(3);
});

test('Test suma: given 0.1 and 0.2, it should return 0.3', () => {
  expect(operations.suma(0.1, 0.2)).toBeCloseTo(0.3);
});

test('Test resta: given 1 and 2, it should return -1', () => {
  expect(operations.resta(1, 2)).toBe(-1);
});

test('Test multiplicacion: given 1 and 2, it should return 2', () => {
  expect(operations.multiplicacion(1, 2)).toBe(2);
});

test('Test division: given 4 and 0, it should return "No se puede dividir por 0"', () => {
  expect(operations.division(4, 0)).toStrictEqual('No se puede dividir por 0');
});

test('Test division: given 0 and 4, it should return 0', () => {
  expect(operations.division(0, 4)).toBe(0);
});

test('Test division: given 2 and 4, it should return 0.5', () => {
  expect(operations.division(2, 4)).toBeCloseTo(0.5);
});

test('Test tablaMultiplicar: given 2 and 3, it should return [0, 2, 4, 6]', () => {
  expect(operations.tablaMultiplicar(2, 3)).toEqual([0, 2, 4, 6]);
});

test('Test tablaMultiplicar: given 3 and undefined, it should return [0, 3, 6, 9, 12, 15, 18, 21, 24, 27, 30]', () => {
  expect(operations.tablaMultiplicar(3, undefined)).toEqual([0, 3, 6, 9, 12, 15, 18, 21, 24, 27, 30]);
});

test('Test tablaMultiplicar: given undefined and 1, it should return [NaN, NaN]', () => {
  expect(operations.tablaMultiplicar(undefined, 1)).toEqual([NaN, NaN]);
});

test('Test potencia: given 2 and 2, it should return 4', () => {
  expect(operations.potencia(2, 2)).toBe(4);
});

test('Test anidada: given 2 and 2, it should return 8', () => {
  expect(operations.anidada(2, 2)).toBe(8);
});

test('Test cerosIzq: given 0 and 2, it should return "00"', () => {
  expect(operations.cerosIzq(0, 2)).toBe('00');
});

test('Test cerosIzq: given 0 and 0, it should return "0"', () => {
  expect(operations.cerosIzq(0, 0)).toBe('0');
});

test('Test cerosIzq: given 11 and 0, it should return "11"', () => {
  expect(operations.cerosIzq(11, 0)).toBe('11');
});

test('Test cerosIzq: given 11 and 3, it should return "0"', () => {
  expect(operations.cerosIzq(11, 3)).toBe('011');
});
