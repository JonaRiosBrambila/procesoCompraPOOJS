const arreglo = ["Jonatan", "Rios", 34];

console.log(arreglo[1]);

let objeto = {
    nombre: "Jonatan",
    apellido: {
        paterno: "Rios",
        materno: "Brambila"
    },
    edad: 29,
    nombreCompleto: function() {
        return this.nombre + " " + this.apellido.paterno;

    }

}
document.getElementById("boquita").innerHTML = objeto.nombreCompleto();

//console.log(objeto.nombreCompleto());