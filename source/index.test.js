import { test } from "@jest/globals";
import * as operations from "./index";

describe("Test texto:", () => {
  test("given 'Hello', it should return 'Hello'", () => {
    expect(operations.texto("Hello")).toStrictEqual("Hello");
  });

  test("given 123, it should return 123", () => {
    expect(operations.texto(123)).toStrictEqual(123);
  });
});

describe("Test suma:", () => {
  test("given 1 and 2, it should return 3", () => {
    expect(operations.suma(1, 2)).toBe(3);
  });

  test("given 0.1 and 0.2, it should return 0.3", () => {
    expect(operations.suma(0.1, 0.2)).toBeCloseTo(0.3);
  });
});

describe("Test resta:", () => {
  test("given 1 and 2, it should return -1", () => {
    expect(operations.resta(1, 2)).toBe(-1);
  });
});

describe("Test multiplicacion:", () => {
  test("given 1 and 2, it should return 2", () => {
    expect(operations.multiplicacion(1, 2)).toBe(2);
  });
});

describe("Test division:", () => {
  test("given 4 and 0, it should return 'No se puede dividir por 0'", () => {
    expect(operations.division(4, 0)).toStrictEqual("No se puede dividir por 0");
  });

  test("given 0 and 4, it should return 0", () => {
    expect(operations.division(0, 4)).toBe(0);
  });

  test("given 2 and 4, it should return 0.5", () => {
    expect(operations.division(2, 4)).toBeCloseTo(0.5);
  });
});

describe("Test tablaMultiplicar:", () => {
  test("given 2 and 3, it should return [0, 2, 4, 6]", () => {
    expect(operations.tablaMultiplicar(2, 3)).toEqual([0, 2, 4, 6]);
  });

  test("given 3 and undefined, it should return [0, 3, 6, 9, 12, 15, 18, 21, 24, 27, 30]", () => {
    expect(operations.tablaMultiplicar(3, undefined)).toEqual([0, 3, 6, 9, 12, 15, 18, 21, 24, 27, 30]);
  });

  test("given undefined and 1, it should return [NaN, NaN]", () => {
    expect(operations.tablaMultiplicar(undefined, 1)).toEqual([NaN, NaN]);
  });
});

describe("Test potencia:", () => {
  test("given 2 and 2, it should return 4", () => {
    expect(operations.potencia(2, 2)).toBe(4);
  });
});

describe("Test anidada:", () => {
  test("given 2 and 2, it should return 8", () => {
    expect(operations.anidada(2, 2)).toBe(8);
  });
});

describe("Test cerosIzq:", () => {
  test("given 0 and 2, it should return '00'", () => {
    expect(operations.cerosIzq(0, 2)).toBe("00");
  });
  
  test("given 0 and 0, it should return '0'", () => {
    expect(operations.cerosIzq(0, 0)).toBe("0");
  });
  
  test("given 11 and 0, it should return '11'", () => {
    expect(operations.cerosIzq(11, 0)).toBe("11");
  });
  
  test("given 11 and 3, it should return '0'", () => {
    expect(operations.cerosIzq(11, 3)).toBe("011");
  });
  
  test("given 55555 and 3, it should return '55555'", () => {
    expect(operations.cerosIzq(55555, 3)).toBe("55555");
  });
  
  test("given 1 and 3, it should return '001'", () => {
    expect(operations.cerosIzq(1, 3)).toBe("001");
  });
});
