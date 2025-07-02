function agregarTarea(){

    //Obtenemos el valor del campo de la tarea
    let nuevaTareaTexto = document.getElementById("nuevaTarea").value;

    //Validamos que el valor no sea vacío
    if (nuevaTareaTexto === "") {
        alert("Please, enter a new task.");
        return;
    }

    //Crear elemento en la lista
    let nuevaTarea = document.createElement("li");    

    nuevaTarea.textContent = nuevaTareaTexto + " ";

    //Crear boton de eliminar
    let botonEliminar = document.createElement("button");
    botonEliminar.textContent = "Eliminar";
    botonEliminar.onclick = function() {nuevaTarea.remove();}

    //Agregar boton eliminar al elemento de la lista

    nuevaTarea.appendChild(botonEliminar);

    //Agregar el elemento/tarea a la lista
    document.getElementById("listaTareas").appendChild(nuevaTarea);

    //Limpiar el cuadro de texto del nombre de la tarea
    document.getElementById("nuevaTarea").value="";
}