var texto = '[ { "nome" : "TV" } ]';


var objeto =  JSON.parse(texto); // Parse converte um texto em JSON (desde que o texto seja compatível)
console.log(texto);

console.log(objeto);
console.log(objeto[0].nome);

var carros = [
{
    "nome" : "Prisma",
    "ano" : 2015
},
{
    "nome" : "Celta",
    "ano" : 2012 
}
];

console.log(carros); 

var carrosString = JSON.stringify(carros); //JSON Stringify converte um objeto JSON valido em string
console.log(carrosString);