class Padre{
    _nombre;
    _edad;
    constructor(nombre, edad){
        this._nombre = nombre;
        this._edad = edad;
    }
    saludar(){
        console.log( `Hola, soy ${this._nombre} y tengo ${this._edad} años`);
    }
}
module.exports = Padre;