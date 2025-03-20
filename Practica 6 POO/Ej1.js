const Autenticacion ={
    login(usuario){
console.log(`${usuario} inicio sesion`);
    }
};

const Notificacion = {
    enviarNotificacion(mensaje){
        console.log(`Notificacion: ${mensaje}`);
    }
};

class Usuario{
    constructor(nombre){
        this.nombre = nombre;
    }
}

Object.assign(Usuario.prototype, Autenticacion, Notificacion);

const Usuario1 = new Usuario('Lenin');

Usuario1.login('Lenin');
Usuario1.enviarNotificacion('Bienvenido a la Plataforma');