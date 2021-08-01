import Impuesto from "./Impuestos";
export default class Cliente{
    constructor(nombre)
    {
        this._nombre=nombre;
        this._impuesto = new Impuesto(500000,15000);
    }

    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        this._nombre=nombre;
    }

    calcularImpuesto(){
        return ((this._impuesto.monto_bruto_anual-this._impuesto.deducciones)*0.21);
    }
}