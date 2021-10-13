/* _____ 2.1 _____ Inserta dinamicamente en un html un div vacio con javascript. */

function addDiv () {
    let newDiv = document.createElement("div");
    document.body.replaceChild(newDiv,h2);
}
/* _____ 2.2 _____ Inserta dinamicamente en un html un div que contenga una p con javascript. */

function addContentDiv () {
    let newDiv = document.createElement("div");
    let newContent = document.createTextNode("Hola! ¿Qué tal?");
   
    newDiv.appendChild(newContent);
}

/* _____ 2.3 _____ Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript. */

function addLoop() {
    let newDivLoop = document.createElement('div');
    document.body.appendChild(newDivLoop);

    for (let i = 1; i <= 6; i++) {
        let newP = document.createElement('p');
        
        newDiv.appendChild(newP);
    }
}


/* _____ 2.4 _____ Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'. */

function addContentP () {
    let newP = document.createElement("p");
    let newContent2 = document.createTextNode('Soy dinámico!');
   
    newP.appendChild(newContent2);
}

/* _____ 2.5 _____ Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'. */


function addTitle () {
    let newTitle = document.getElementsByClassName(fn-insert-here);
    newTitle.innerHTML = 'Wubba Lubba dub dub';
    console.log(newTitle.innerHTML);
}

/* _____ 2.6 _____ Basandote en el siguiente array crea una lista ul > li con los textos del array. const  */

apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

let list = document.createElement("ul");
    for (let i = 0; i < apps.length; i++) {
        let listLi = list.appendChild(document.createElement("li"));
    }

console.log(list);


/* _____ 2.7 _____ Elimina todos los nodos que tengan la clase .fn-remove-me */

let d = document.querySelector("body");
let remove = document.querySelectorAll("fn-remove-me");
let result = d.removeChild(remove);

/* _____ 2.8 _____ Inserta una p con el texto 'Voy en medio!' entre los dos div. Recuerda que no solo puedes insertar elementos con .appendChild. */



/* _____ 2.9 _____ Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase .fn-insert-here */

