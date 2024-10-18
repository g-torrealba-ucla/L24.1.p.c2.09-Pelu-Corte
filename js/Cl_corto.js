import Cl_servicio from "./Cl_servicio.js";

export default class Cl_corto extends Cl_servicio {
  constructor(codigo, tipo, extension) {
    super(codigo, tipo);
    this.extension = extension;
  }
  incremento() {
    if (this.extension === "SI") {
      return 500;
    } else return 0;
  }
}
