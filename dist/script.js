"use strict";

var _Cliente = _interopRequireDefault(require("./Cliente"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var cliente = new _Cliente["default"]("fernando");
console.log("Cliente ".concat(cliente.nombre, " debera pagar ").concat(cliente.calcularImpuesto(), " como impuesto"));