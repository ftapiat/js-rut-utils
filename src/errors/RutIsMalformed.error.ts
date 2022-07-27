export class RutIsMalformedError extends Error {
  constructor(message = 'El RUT es inválido') {
    super(message);
    Object.setPrototypeOf(this, RutIsMalformedError.prototype);
  }
}
