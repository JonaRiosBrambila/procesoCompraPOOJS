/*
class generation {
    constructor(name, year) {
        this.name = name;
        this.year = year;

    }

}

const persona1 = new persona("Jonatan", 1992);
const persona2 = new persona("Jonatan", 2000);

console.log(persona1);
console.log(persona2);


document.getElementById("ID").innerHTML = persona1.name;
document.getElementById("ID").innerHTML = persona2.name;

var objeto = {
    name = "Jonatan",
    year = 1992
}

var objeto2 = {
    name = "David",
    year = 1987
}
*/
var apellido = prompt("Introduce el apellido del padre: ");
var nombre1 = prompt("Introduce el nombre del primer hijo: ");
var nombre2 = prompt("Introduce el nombre del segundo hijo: ");

class padre {
    constructor(apellido) {
        this.apellidoPadre = apellido;
    }
}

// var padre = {

//   apellidoPadre:"parámetro del constructor"

// }

class hijo extends padre {
    constructor(nombre, apellido) {
        super(apellido);
        this.nombreHijo = nombre;
    }

    registro() {
        return (
            "El nombre del hijo será: " + this.nombreHijo + " " + this.apellidoPadre);
    }
}

let Hijo1 = new hijo(nombre1, apellido);
let Hijo2 = new hijo(nombre2, apellido);

document.getElementById("Id").innerHTML = Hijo1.registro();
document.getElementById("Id2").innerHTML = Hijo2.registro();