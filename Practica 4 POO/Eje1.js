class CuentaBancaria {
    constructor(numeroCuenta, titular, saldo, activa) {
        this.numeroCuenta = numeroCuenta;
        this.titular = titular;
        this.saldo = saldo;
        this.activa = activa;
    }

    // Métodos get y set
    getNumeroCuenta() {
        return this.numeroCuenta;
    }
    setNumeroCuenta(numeroCuenta) {
        this.numeroCuenta = numeroCuenta;
    }

    getTitular() {
        return this.titular;
    }
    setTitular(titular) {
        this.titular = titular;
    }

    getSaldo() {
        return this.saldo;
    }
    setSaldo(saldo) {
        this.saldo = saldo;
    }

    isActiva() {
        return this.activa;
    }
    setActiva(activa) {
        this.activa = activa;
    }

    // Métodos para operaciones bancarias
    depositar(monto) {
        if (monto > 0) {
            this.saldo += monto;
            console.log(`Depósito exitoso. Nuevo saldo: ${this.saldo}`);
        } else {
            console.log("El monto a depositar debe ser mayor a 0.");
        }
    }

    retirar(monto) {
        if (!this.activa) {
            console.log("No se puede retirar, la cuenta está inactiva.");
            return;
        }
        if (monto > 0 && monto <= this.saldo) {
            this.saldo -= monto;
            console.log(`Retiro exitoso. Nuevo saldo: ${this.saldo}`);
        } else {
            console.log("Fondos insuficientes o monto inválido.");
        }
    }

    mostrarInformacion() {
        console.log(`Cuenta Bancaria:
        Número de Cuenta: ${this.numeroCuenta}
        Titular: ${this.titular}
        Saldo: ${this.saldo}
        Activa: ${this.activa ? "Sí" : "No"}`);
    }
}

// Ejemplo de uso
const cuenta = new CuentaBancaria("123456", "Juan Pérez", 1000, true);
cuenta.mostrarInformacion();
cuenta.depositar(500);
cuenta.retirar(300);
cuenta.mostrarInformacion();

