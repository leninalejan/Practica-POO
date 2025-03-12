const Padre = require('./padre')

class Hija extends Padre{
    constructor(nombre, edad, hermanos){
        super(nombre,edad);
        this.hermanos = hermanos
    }
    saludar(){
        console.log(`Hola soy ${this._nombre} y soy una clase hija`);
    }
    presentarHermanos(){
        console.log(`Mis hermanos son: ${this.hermanos.join(',')}`);
    }
}

const hija = new Hija('Ana', 30, ['Juan' ,  'Maria']);
hija.saludar();
hija.presentarHermanos();