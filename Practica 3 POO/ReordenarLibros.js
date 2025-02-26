class Libro{
    constructor(titulo, autor, añoPublicacion){
        this.titulo = titulo;
        this.autor = autor;
        this.añoPublicacion = añoPublicacion;
    }
}

class Biblioteca{
    constructor(){
        this.libros = [];
    }
    //Utilizamos plantilla libro

    agrgarLibro(titulo, autor, añoPublicacion){
        const nuevoLibro = new Libro(titulo, autor ,añoPublicacion);
        this.libros.push(nuevoLibro);
        console.log(`El libro ${titulo} ha sido agregado a la biblioteca`)
    }

    buscarporTitulo(titulo){
        const libroEncontrado = this.libros.filter(libro => libro.titulo.toLowerCase().icludes
    (titulo.toLowerCase()));
    if (libroEncontrado.length > 0) {
        console.log("Libro Encontrdo");
        libroEncontrado.forEach(libro => {
            console.log(`${libro.titulo} de ${libro.autor} publicado en ${libro.añoPublicacion}`)
        })
    } else {
        console.log(`No se encontro ningun libro : ${titulo} `)
        
    }
    }
    mostrarLibros(){
        if (this.libros.length > 0) {
            console.log("Libros Disponibles");
            this.lobro.forEach(libro =>{
                console.log(`${libro.titulo} de ${libro.autor} publicado en ${libro.añoPublicacion}`)
            })
        } else {
            console.log("Biblioteca vacia")
            
        }
    }
}

const miBiblioteca   = new Biblioteca();
miBiblioteca.mostrarLibros();

miBiblioteca.agrgarLibro("Primer titulo" ,"yo" ,"2025")
miBiblioteca.buscarporTitulo("Primer titulo")