/**
 * PELU-CORTE
 * En una peluquería se atienden los clientes según el largo del cabello (1=Corto, 2=Largo).
 * Se ofrecen los siguientes servicios básicos (1=Corte, 2=Secado, 3=Ambos), de los cuales los
 * precios serán BsF: 35, 50 y 75, respectivamente; pero si es de cabello corto se ofrece Extensiones
 * con un costo de BsF 500 y si es largo Permanentes con un valor de BsF 300. Además, se sabe que
 * el precio de los servicios se incrementa en un 20% si es de cabello largo.
 * Se desea conocer:
 * a) por cliente: incremento y monto a pagar,
 * b) por la peluquería: Mayor monto pagado.
 * Considere los pelo corto: (cedula, servicio, extension)
 * (22, 2, NO)
 * (11, 1, SI)
 * (55, 1, NO)
 * (88, 3, SI)
 * Considere los pelo largo: (cedula, servicio, permanente)
 * (44, 2, SI)
 * (33, 3, NO)
 * (77, 1, NO)
 * (44, 1, SI)
 */

import Cl_peluqueria from "./Cl_peluqueria.js";
import Cl_corto from "./Cl_corto.js";
import Cl_largo from "./Cl_largo.js";

let peluqueria = new Cl_peluqueria(),
  corto1 = new Cl_corto(22, 2, "NO"),
  corto2 = new Cl_corto(11, 1, "SI"),
  corto3 = new Cl_corto(55, 1, "NO"),
  corto4 = new Cl_corto(88, 3, "SI"),
  largo1 = new Cl_largo(44, 2, "SI"),
  largo2 = new Cl_largo(33, 3, "NO"),
  largo3 = new Cl_largo(77, 1, "NO"),
  largo4 = new Cl_largo(44, 1, "SI");

peluqueria.procesarServicio(corto1);
peluqueria.procesarServicio(corto2);
peluqueria.procesarServicio(corto3);
peluqueria.procesarServicio(corto4);
peluqueria.procesarServicio(largo1);
peluqueria.procesarServicio(largo2);
peluqueria.procesarServicio(largo3);
peluqueria.procesarServicio(largo4);

let salida = document.getElementById("salida");

let mostrarServicio = (servicio) => {
  return `<tr>
    <td>${servicio.codigo}</td>
    <td>${servicio.tipo}</td>
    <td>${servicio.precio()}</td>
    <td>${servicio.extension??'--'}</td>
    <td>${servicio.permanente??'--'}</td>
    <td>${servicio.incremento()}</td>
    <td>${servicio.montoPagar()}</td>
  </tr>`;
};

salida.innerHTML = `
<table>
  <th>Código</th>
  <th>Tipo</th>
  <th>Precio</th>
  <th>Extensiones</th>
  <th>Permanente</th>
  <th>Incremento</th>
  <th>Monto pagar</th>
${mostrarServicio(corto1)}
${mostrarServicio(corto2)}
${mostrarServicio(corto3)}
${mostrarServicio(corto4)}
${mostrarServicio(largo1)}
${mostrarServicio(largo2)}
${mostrarServicio(largo3)}
${mostrarServicio(largo4)}
</table>
Monto mayor pagado: ${peluqueria.montoMayor()}
`;
