// /*
// Crear un sistema para verificar si un usuario tiene un cceso  un panl de administracion. 
// Para esto, se deben cumplir las sig condiciones:

// El usuanrio debe estar registrado:
// El usuario debe tener permiso de admin:
// La cueta del usuario no debe estar suspendida:
// */

// class Usuario{
//     constructor(nombre, registrado, admin, suspendido){
//         this.nombre = nombre;
//         this.registrado = registrado;
//         this.admin = admin;
//         this.suspendido = suspendido;
//     }
    
// }

// function verificarAcceso(usuario){
//     if (!usuario.registrado) {
//         return " Acceso denegado: El usurio no esta registrado ";  
//     } 
//     if (!usuario.admin){
//         return "Acceso denegado: El usuario no tiene permisos de admin";
//     }

//     if(usuario.suspendido){
//         return "Accceso denegado: La cuenta del usuario esta suspendida";


//     }
//     return " Acceso concedido: Bienvenido al panel de admin";
        
//     }

// const usuario1 = new Usuario("Juan", true, true, false);
// const usuario2 = new Usuario("Maria", true, false, false);
// const usuario3 = new Usuario("Carlos", true, true, true);
// const usuario4 = new Usuario("Ana", false, true, false);

// console.log(`El usuario #1 ${verificarAcceso(usuario1)}`); 
// console.log(`El usuario #2 ${verificarAcceso(usuario2)}`); 
// console.log(`El usuario #3 ${verificarAcceso(usuario3)}`); 
// console.log(`El usuario #4 ${verificarAcceso(usuario4)}`);



