let nuevaTarea=document.getElementById("nuevaTarea");
let padreLista=document.getElementById("listaTareas");
let padreListaProgreso=document.querySelector(".cuadroProgreso");


function agregarTarea(){
    if (nuevaTarea.value === "") {
        alert("No ingresaste nada");
    }else{
        padreLista.insertAdjacentHTML("beforeend",`<li class="elementoLista">${nuevaTarea.value}<button class="botonEliminar">Eliminar</button></li>`);
        padreListaProgreso.insertAdjacentHTML("beforeend",`<li class="elementoLista"><button class="botonProgreso1"><img src="../assets/img/green-tick.png" alt="" style="width: 60%; visibility: hidden;"></button></li>`)
        limpiar();
    }
}

function limpiar(){
    nuevaTarea.value="";
    nuevaTarea.focus();
}

function eliminarTarea(e, i){
    if (e.target.classList.contains("botonEliminar")){
        e.target.parentElement.remove(); // elimina el <li> que contiene el botón
        i.target.parentElement.remove();
    }
}


function teclado(e){
    (e.key==="Enter") && agregarTarea();
}

document.querySelector(".botonAgregarTarea").addEventListener("click",agregarTarea);
padreLista.addEventListener("click", eliminarTarea);
nuevaTarea.addEventListener("keydown",teclado);













// function agregarTarea(){

//     //Obtenemos el valor del campo de la tarea
//     let nuevaTareaTexto = document.getElementById("nuevaTarea").value;

//     //Validamos que el valor no sea vacío
//     if (nuevaTareaTexto === "") {
//         alert("Por favor, ingrese una nueva tarea.");
//         return;
//     }

//     //Crear elemento en la lista
//     let nuevaTarea = document.createElement("li");    

//     nuevaTarea.textContent = nuevaTareaTexto + " ";

//     //Crear boton de eliminar
//     let botonEliminar = document.createElement("button");
//     botonEliminar.textContent = "Eliminar";
//     botonEliminar.onclick = function() {nuevaTarea.remove();}

//     //Agregar boton eliminar al elemento de la lista

//     nuevaTarea.appendChild(botonEliminar);

//     //Agregar el elemento/tarea a la lista
//     document.getElementById("listaTareas").appendChild(nuevaTarea);

//     //Limpiar el cuadro de texto del nombre de la tarea
//     document.getElementById("nuevaTarea").value="";
// }