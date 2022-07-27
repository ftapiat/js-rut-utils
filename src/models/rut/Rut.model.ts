import { cleanRut, formatRut, generateDv, generateRut, isRutValid } from '@/utils';
import { RutIsMalformedError } from '@/errors';

/**
 * Representa un RUT chileno y sus propiedades número y dígito verificador.
 *
 * Reglas:
 * - El dígito verificador debe ser válido.
 * - El número debe ser mayor o igual a 1 millón.
 * - El número no puede ser un RUT falso con todos sus caracteres repetidos, como 11.111.111-1, 22.222.222-2, etc.
 */
export class RutModel {
  private _number: number;
  private _dv: string;

  get number(): number {
    return this._number;
  }

  set number(value: number) {
    this._number = value;
  }

  get dv(): string {
    return this._dv;
  }

  set dv(value: string) {
    this._dv = value;
  }

  /**
   * RUT completo con puntos y guion.
   */
  get formatted(): string {
    return formatRut(this.cleaned);
  }

  /**
   * RUT completo sin puntos ni guion.
   */
  get cleaned(): string {
    return cleanRut(`${this.number}${this.dv}`);
  }

  /**
   * Registra el RUT con sus datos básicos
   * @param number número del RUT.
   * @param dv DV del RUT.
   * @throws {RutIsMalformedError} si el RUT no cumple con las reglas de validación.
   */
  constructor(number: number, dv: string) {
    if (!isRutValid(`${number}${dv}`)) {
      throw new RutIsMalformedError();
    }

    this._number = number;
    this._dv = dv;
  }

  /**
   * Genera un RUT valido aleatorio.
   */
  static random(): RutModel {
    return RutModel.fromString(generateRut());
  }

  /**
   * Crea el RUT usando su número y su DV.
   * @param rut Rut completo.
   */
  static fromString(rut: string): RutModel {
    const rutCleaned = cleanRut(rut);
    const indexToSplit = rutCleaned.length - 1;
    const [number, dv] = [rutCleaned.slice(0, indexToSplit), rutCleaned.slice(indexToSplit)];
    return new RutModel(Number.parseInt(number), dv);
  }

  /**
   * Genera un RUT a partir de su número. Luego automáticamente calculará su DV.
   * @param rutNumber
   */
  static fromNumber(rutNumber: number): RutModel {
    return new RutModel(rutNumber, generateDv(rutNumber));
  }
}
