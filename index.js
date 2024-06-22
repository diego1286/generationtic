import { Carro } from "./Carro.js";

let carro = new Carro("toyota");

console.log(carro);

function sumar(a, b) {
  return a + b;
}
console.log(sumar(1, 4));

//funciones de flecha
const sumarDOS = (a, b) => {
  return a + b;
};
let result = sumarDOS(3, 5);
console.log(result);

//funciones de flecha con parametro
const message = (nombre) => {
  return "hola mundo", nombre;
};

const resultSaludo = message("Diego");

console.log(resultSaludo);

//Template string  para concatenar codigo html
const numero = (num1, num2) => {
  return `la suma es es ${num1 + num2}`;
};

const resultado = numero(3, 5);
console.log(resultado);

//objetos en js
const animal = {
  nombre: "perro",
  raza: "pomeranian",
  edad: 3,
  nombre: "aria",
  tamano: ["grande", "pequeño"],
};

console.log(animal);
console.log(animal.nombre);
console.log(animal.tamano[1]);

const web = {
  nombre: "diego",
  link: {
    enlace: "https://www.google.com",
  },
  redesSociales: {
    enalce: "https://www.facebook.com",
    nombre: "facebook",
  },
  apellido: "ardila",
};

//funcion que llama al api de pokeapi

async function getPokemonData() {
  try {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/");
    const data = await response.json();
    //console.log(data.results);
    data.results.forEach((pokemon) => {
      console.log(pokemon.name);
    });
  } catch (error) {
    console.error("Error  data:", error);
  }
}

getPokemonData();

let x = 0;

while (x < 10) {
  console.log("aca" + x);
  x++;
}
