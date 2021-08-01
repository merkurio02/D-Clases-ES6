import Cliente from "./Cliente";


const cliente =  new Cliente("fernando");

console.log(`Cliente ${cliente.nombre} debera pagar ${cliente.calcularImpuesto()} como impuesto`);