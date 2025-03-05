class Estudiante {
    constructor(nombre, edad, promedio, activo) {
        this.nombre = nombre;
        this.edad = edad > 0 ? edad : 1; // Validar que la edad sea mayor que 0
        this.promedio = (promedio >= 0 && promedio <= 10) ? promedio : 0; // Validar promedio entre 0 y 10
        this.activo = activo;
    }

    // Métodos get y set
    getNombre() {
        return this.nombre;
    }
    setNombre(nombre) {
        this.nombre = nombre;
    }

    getEdad() {
        return this.edad;
    }
    setEdad(edad) {
        if (edad > 0) {
            this.edad = edad;
        } else {
            console.log("La edad debe ser mayor que 0.");
        }
    }

    getPromedio() {
        return this.promedio;
    }
    setPromedio(promedio) {
        if (promedio >= 0 && promedio <= 10) {
            this.promedio = promedio;
        } else {
            console.log("El promedio debe estar entre 0 y 10.");
        }
    }

    isActivo() {
        return this.activo;
    }
    setActivo(activo) {
        this.activo = activo;
    }

    // Métodos adicionales
    actualizarPromedio(nuevaCalificacion) {
        if (nuevaCalificacion >= 0 && nuevaCalificacion <= 10) {
            this.promedio = nuevaCalificacion;
            console.log(`Nuevo promedio actualizado: ${this.promedio}`);
        } else {
            console.log("La calificación debe estar entre 0 y 10.");
        }
    }

    cambiarEstado() {
        this.activo = !this.activo;
        console.log(`Estado cambiado. Ahora el estudiante está ${this.activo ? "activo" : "inactivo"}.`);
    }

    mostrarInformacion() {
        console.log(`Estudiante:
        Nombre: ${this.nombre}
        Edad: ${this.edad}
        Promedio: ${this.promedio}
        Activo: ${this.activo ? "Sí" : "No"}`);
    }
}

// Ejemplo de uso
const estudiante = new Estudiante("Carlos López", 20, 8.5, true);
estudiante.mostrarInformacion();
estudiante.actualizarPromedio(9.2);
estudiante.cambiarEstado();
estudiante.mostrarInformacion();