const MYNAME = "Jorge Emmanuel González Hernández";

console.log(MYNAME.length);

let search = "González";

console.log(MYNAME.includes(search));

console.log(MYNAME.toLocaleLowerCase());

console.log(MYNAME.toUpperCase());

console.log(MYNAME.toUpperCase().includes(search.toUpperCase()));

let weekDay  = "martes";

let day = "08";

let month = "Marzo";

let date = weekDay + day + month;

//Template String
let datePro = `${weekDay}/${day}/${month.toLocaleUpperCase()}`;

let cadenaEnVariosRenglones = `
Esta
Es 
Una 
Cadena
De 
Varios 
Renglones.
Cadena
Otra Cadena
`;

const WORD = "Cadena";

//Hace un arreglo con las partes separadas por la cadena que se pasa como argumento
let partes = cadenaEnVariosRenglones.split(WORD);

//Forma de mostrar el resultado ocupando las variables y haciendo operaciones sobre ellas como en la variable partes
console.log(`${WORD} aparece ${partes.length-1} veces en la cadena ${cadenaEnVariosRenglones}` );

//Arreglo de frutas
let frutas = ["manzana", "pera", "sandia"];

//Mostrar por consola los elementos del array frutas separado por una coma (,)
console.log(frutas.join(","));

