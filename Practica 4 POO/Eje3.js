class Vehiculo {
    constructor(marca, modelo, anio, kilometraje, disponible) {
        this.marca = marca;
        this.modelo = modelo;
        this.anio = anio > 1900 ? anio : 1901; // Validar que el año sea mayor que 1900
        this.kilometraje = kilometraje >= 0 ? kilometraje : 0; // Validar que el kilometraje no sea negativo
        this.disponible = disponible;
    }

    // Métodos get y set
    getMarca() {
        return this.marca;
    }
    setMarca(marca) {
        this.marca = marca;
    }

    getModelo() {
        return this.modelo;
    }
    setModelo(modelo) {
        this.modelo = modelo;
    }

    getAnio() {
        return this.anio;
    }
    setAnio(anio) {
        if (anio > 1900) {
            this.anio = anio;
        } else {
            console.log("El año de fabricación debe ser mayor que 1900.");
        }
    }

    getKilometraje() {
        return this.kilometraje;
    }
    setKilometraje(kilometraje) {
        if (kilometraje >= 0) {
            this.kilometraje = kilometraje;
        } else {
            console.log("El kilometraje no puede ser negativo.");
        }
    }

    isDisponible() {
        return this.disponible;
    }
    setDisponible(disponible) {
        this.disponible = disponible;
    }

    // Métodos adicionales
    aumentarKilometraje(kilometros) {
        if (kilometros > 0) {
            this.kilometraje += kilometros;
            console.log(`Kilometraje actualizado: ${this.kilometraje} km`);
        } else {
            console.log("Los kilómetros a aumentar deben ser mayores a 0.");
        }
    }

    cambiarDisponibilidad() {
        this.disponible = !this.disponible;
        console.log(`Disponibilidad cambiada. Ahora el vehículo está ${this.disponible ? "disponible" : "no disponible"}.`);
    }

    mostrarInformacion() {
        console.log(`Vehículo:
        Marca: ${this.marca}
        Modelo: ${this.modelo}
        Año: ${this.anio}
        Kilometraje: ${this.kilometraje} km
        Disponible: ${this.disponible ? "Sí" : "No"}`);
    }
}

// Ejemplo de uso
const vehiculo = new Vehiculo("Toyota", "Corolla", 2015, 60000, true);
vehiculo.mostrarInformacion();
vehiculo.aumentarKilometraje(1500);
vehiculo.cambiarDisponibilidad();
vehiculo.mostrarInformacion();
