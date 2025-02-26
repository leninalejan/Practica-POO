class Empleado{
    #sueldo
    constructor(nombre , sueldo , puesto){
        this.nombre = nombre;
        this.#sueldo = sueldo;
        this. puesto = puesto;
    }

    get(){
        return this.#sueldo
    }
    set(nuevoSUeldo){
        if (nuevoSUeldo > this.#sueldo) {
            this.#sueldo = nuevoSUeldo;
        } else {
            console.log("Mamñema")
        }
    }
    showInfo(){
        console.log (`Empleado: ${this.nombre} gana un sueldo de $${this.#sueldo} con el puesto de ${this.puesto}`)
    }
}

const Empleado1 = new Empleado ("Lenin", "600", "Desarrollador")
Empleado1.showInfo();
Empleado1.set(100);
Empleado1.showInfo();
Empleado1.set(2000);
Empleado1.showInfo();