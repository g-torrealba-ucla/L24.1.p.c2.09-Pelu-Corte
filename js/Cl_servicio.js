export default class Cl_servicio {
  constructor(codigo, tipo) {
    this.codigo = codigo;
    this.tipo = tipo;
  }
  precio() {
    if (this.tipo === 1) return 35;
    else if (this.tipo === 2) return 50;
    else if (this.tipo === 3) return 75;
  }
  incremento() {
    return 0;
  }
  montoPagar() {
    return this.precio() + this.incremento();
  }
}
