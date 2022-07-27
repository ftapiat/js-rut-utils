# JS Rut Utils

Librería para generar, validar, limpiar y dar formato a RUT chilenos.

## Contenido

- [Cómo Usarlo](#cómo-usarlo)
  - [`RutModel`](#rutmodel)
    - [Propiedades de RutModel](#propiedades-de-rutmodel)
    - [Crear RutModel](#crear-rutmodel)
    - [RUT erróneos](#RUT-erróneos)
  - [Funciones `Utils`](#funciones-utils)
    - [Limpiar RUT](#limpiar-RUT)
    - [Formatear RUT](#formatear-RUT)
    - [Generar RUT aleatorio](#generar-RUT-aleatorio)
    - [Generar DV a partir del número del RUT](#generar-DV-a-partir-del-número-del-RUT)
    - [Validación - Regex que comprueba que el RUT tenga puntos y guion y el largo de un RUT](#head-validacion-regex-1)
    - [Validación - Regex que comprueba que el RUT tenga el largo de un RUT, independientemente de si tiene puntos y guiones](#head-validacion-regex-2)
    - [Validación - RUT es mayor o igual a 1 millón](#head-validacion-mayor-1-millon)
    - [Validación - RUT tiene formato correcto, sobre 1 millón y su DV es válido](#head-validacion-completa)
    - [Validación - DV corresponde al calculado por el módulo 11](#head-validacion-modulo-11)
- [Instalación](#instalación)
- [Testing](#testing)

## Cómo usarlo

Dependiendo de lo que quieras hacer, puedes llamar al modelo `RutModel` o directamente llamar las funciones de la 
carpeta `utils`.

### `RutModel`

Representa a un RUT validado por su dígito verificador.

#### Propiedades de RutModel

Este RUT tiene 4 propiedades:
1. `number` Número del RUT, requerido en el constructor.
2. `dv` Dígito verificador, requerido en el constructor.
3. `formatted` RUT formateado.
4. `cleaned` RUT sin puntos ni guión.

#### Crear RutModel

- La forma más básica de crear un `RutModel` es definiendo sus número y DV:
```js
const rut = new RutModel(19101178, '3');
```
- Sin embargo, no siempre se tiene esa información. Por lo que también puedes crear RUT de la siguiente forma: 
```js
// 1. Aleatorio:
const rutAleatorio = RutModel.random();

// 2. Desde el número del RUT. Esto generará automáticamente su DV:
const rutDesdeNumero = RutModel.fromNumber(19101178);

// 3. Desde el RUT como String. Esto limpiará el RUT y lo asignará
// automáticamente al modelo:
const rutDesdeString1 = RutModel.fromString('10.407.355-7'); // ✔ Funciona con puntos y guión.
const rutDesdeString2 = RutModel.fromString('10407355-7'); // ✔ Funciona sin puntos y con guión.
const rutDesdeString3 = RutModel.fromString('104073557'); // ✔ Funciona sin puntos ni guión.
```

#### RUT erróneos

**Si se crea un RUT con datos erróneos, se lanzará el error `RutIsMalformedError`**.

El RUT puede ser erróneo si: 
- El dígito verificador es inválido.
```js
// ❌ Esto daría error
new RutModel(19101178, '5');
// ✔ Esto no
new RutModel(19101178, '3');
```

- El número es menor a 1 millón.
```js
// ❌ Esto daría error
new RutModel(111111, '6');
// ✔ Esto no
new RutModel(1111111, '4');
```

- El número no puede ser un RUT falso con todos sus caracteres repetidos, como 11.111.111-1, 22.222.222-2, etc.
```js
// ❌ Esto daría error
new RutModel(44444444, '4');
// ✔ Esto no
new RutModel(19101178, '3');
```

### Funciones `utils`

Todas las características de `RutModel` se subdividieron en varias funciones en la carpeta `utils`:

#### Limpiar RUT
```js
// Limpia el RUT de puntos y guiones.
const rut = cleanRut('19.101.178-3'); // '191011783'
```

#### Formatear RUT
```js
// Agrega puntos y guión al RUT
const rut = formatRut('191011783'); // '19.101.178-3'
```

#### Generar RUT aleatorio
```js
const rut = generateRut(); // Generará un RUT con DV, SIN puntos ni guión.
const rut = generateRut(true); // Generará un RUT con DV, CON puntos y guión.
```

#### Generar DV a partir del número del RUT
```js
const dv = generateDV(19101178); // '3'
```

#### <a id="head-validacion-regex-1"><a/>Validación - Regex que comprueba que el RUT tenga puntos y guion y el largo de un RUT
```js
rutForcedDotsAndDashRegex.test('19.101.178-3'); // ✔ true
rutForcedDotsAndDashRegex.test('191011783'); // ❌ false
rutForcedDotsAndDashRegex.test('19101178-3'); // ❌ false
rutForcedDotsAndDashRegex.test('abcde'); // ❌ false
```

#### <a id="head-validacion-regex-2"><a/>Validación - Regex que comprueba que el RUT tenga el largo de un RUT, independientemente de si tiene puntos y guiones
```js
rutOptionalDotsAndDashRegex.test('19.101.178-3'); // ✔ true
rutOptionalDotsAndDashRegex.test('191011783'); // ✔ true
rutOptionalDotsAndDashRegex.test('19101178-3'); // ✔ true
rutOptionalDotsAndDashRegex.test('abcde'); // ❌ false
```

#### <a id="head-validacion-mayor-1-millon"></a>Validación - RUT es mayor o igual a 1 millón
```js
isRutNumberOver1Million(1000000); // ✔ true
isRutNumberOver1Million(11000000); // ✔ true
isRutNumberOver1Million(999999); // ❌ false
```

#### <a id="head-validacion-completa"></a>Validación - RUT tiene formato correcto, sobre 1 millón y su DV es válido
```js
isRutValid('10407355-7'); // ✔ true : Sin puntos con guión y DV válido.
isRutValid('19.982-6'); // ❌ false : Número menor a 1 millón.
isRutValid('44.444.444-4'); // ❌ false : Número repetido.
```

#### <a id="head-validacion-modulo-11"></a>Validación - DV corresponde al calculado por el módulo 11
```js
isRutValidInModule11(19101178, '3'); // ✔ true  
isRutValidInModule11(19101178, '4'); // ❌ false  
```

## Instalación

```bash
npm install --save @ftapia/js-rut-utils
```

## Testing

```bash
npm install
npm test
```