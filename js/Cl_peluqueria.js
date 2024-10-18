export default class Cl_peluqueria {
  constructor() {
    this.mtoMayor = 0;
  }
  procesarServicio(servicio) {
    if (servicio.montoPagar() > this.mtoMayor) {
      this.mtoMayor = servicio.montoPagar();
    }
  }
  montoMayor() {
    return this.mtoMayor;
  }
}
