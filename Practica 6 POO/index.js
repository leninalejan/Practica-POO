// const Comunicacion = {
//     enviarMesanje(mensaje){
//         console.log(`${this.nombre} envio : ${this.mensaje}`);
//     }
// }
// const Registro = {
//     registrarAccion(accion){
//         console.log(`${this.nombre} realizo: ${this.accion}`);
//     }
// };

// class Usuario{
//     constructor(nombre){
//         this.nombre = nombre;
//     }
// }

// Object.assign(Usuario.prototype, Comunicacion, Registro);

// const Usuario1 = new Usuario('Lenin');
// Usuario1.enviarMesanje('Hola');
// Usuario1.registrarAccion('Login');

// class CuentaBancaria{
//     #saldo;
//     constructor(nombre, saldoInicial){
//         this.nombre = nombre;
//         this.#saldo = saldoInicial;
//     }
//     depositar(monto){
//         if (monto > 0) {
//             this.#saldo += monto;
//             console.log (`Depsito exitoso,su slado es de ${this.#saldo}`);
//         } else {
//             console.log('El monto dede ser mayor a 0');
            
//         }
//     }
//     obtenerSaldo(){
//         return`Saldo disponible : ${this.#saldo}`;
//     }
// }

// const cuenta1 = new CuentaBancaria('Lenin', 10000);
// console.log(cuenta1.obtenerSaldo());
// console.log(cuenta1.depositar(50000));
// console.log(cuenta1.obtenerSaldo());

