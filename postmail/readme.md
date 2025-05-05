para el POST del usuario
http://localhost:3000/usuario // asi se prueba la informacion del usuario

{
  "nombre": "María López",
  "credito": 135,
  "costoEnvio": 4.5,
  "enviosDisponibles": 30
}(esto se pone en el Body del Thuder)


para el GET del usuario
http://localhost:3000/usuario/68182af5364261412a37b9e5/creditos // para ver cuantos creditos tiene el cliente ingresado



para el POST
http://localhost:3000/envios // para ingresar el envio 

{
  "usuarioId": "68182af5364261412a37b9e5", // en esa iD se toma la que se da en el post del usuario
  "nombre": "Juan Pérez",
  "direccion": "Colonia Centro",
  "telefono": "71234567",
  "referencia": "Frente al parque",
  "observacion": "Frágil",
  "producto": {
    "descripcion": "Laptop",
    "peso": 2.5,
    "bultos": 1,
    "fecha_entrega": "2025-05-10"
  }
}(esto se pone en el Body del Thuder)

para el DET de envios
http://localhost:3000/envios/68182af5364261412a37b9e5  //   --- envios/ID (la id depende)

para el DELETE de envios 
http://localhost:3000/envios/ID (la id depende de cual de en el post)
ejemplo : "68182ba6364261412a37b9e9" esta es la que dio en este caso 

