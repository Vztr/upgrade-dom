/* 1.1 Usa querySelector para mostrar por consola el botón con la clase .showme */

const Show = document.querySelector('.showme')
console.log(Show)
console.log(Show.innerHTML)

/* 1.2 Usa querySelector para mostrar por consola el h1 con el id #pillado */

const h1 = document.querySelector('#pillado')
console.log(h1)
console.log(h1.innerHTML)

/* 1.3 Usa querySelector para mostrar por consola todos los p */

const paragraphs = document.querySelectorAll('p');

for (let i = 0; i < paragraphs.length; i++) {
    console.log(paragraphs[i].innerHTML)
    
}

/* 1.4 Usa querySelector para mostrar por consola todos los elementos con la clase.pokemon */

const pokemon = document.querySelectorAll('.pokemon')

for (let i = 0; i < pokemon.length; i++) {
    console.log(pokemon[i].innerHTML)

}

/* 1.5 Usa querySelector para mostrar por consola todos los elementos con el atributo data-function="testMe". */

const test = document.querySelectorAll("[data-function='testMe']")

for (let i = 0; i < test.length; i++) {
    console.log(test[i].innerHTML)
    
}

/* 1.6 Usa querySelector para mostrar por consola el 3 personaje con el atributo data-function="testMe". */

let attribute = document.querySelectorAll('[data-function="testMe"]');
for (let i = 0; i < attribute.length; i++) {
    
    if (attribute[i] === attribute[2]){
        console.log(attribute[i].innerHTML);
    }
}
