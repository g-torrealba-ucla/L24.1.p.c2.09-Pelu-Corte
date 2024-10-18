import Cl_servicio from "./Cl_servicio.js";

export default class Cl_largo extends Cl_servicio {
  constructor(codigo, tipo, permanente) {
    super(codigo, tipo);
    this.permanente = permanente;
  }
  incremento() {
    let inc = 0;
    if (this.permanente === "SI") inc = 300;
    if (this.permanente === "SI") return (this.precio() + inc) * 0.2;
    else return this.precio() + inc;
  }
}
