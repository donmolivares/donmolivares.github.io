const tareaingresada = document.querySelector("#Nombre-tarea")    
const btn = document.querySelector("#boton-agregar")
const check = document.querySelector("#id_check")
const lista = document.querySelector("#ul-listatareas")                                                                                                            
const arraytareas = [{id_tarea:'100',nombre:'COMPRA DE MATERIALES ESCOLARES',completado:false}, {id_tarea:'200',nombre:'COMPRA DE PLANTAS PARA PARCELAS',completado:false},{id_tarea:'300',nombre:'ENTREGAR TALLER DE JS CON HTML CSS',completado:false}] 
renderizado()

btn.addEventListener('click',()=>{ 
const recatatarea = {id_tarea:Date.now(), nombre: tareaingresada.value, completado:false }
arraytareas.push(recatatarea)
renderizado()
})


function borrar(id) {
    const id_tareaaborrar = id
    const indice = arraytareas.findIndex(tareaz =>tareaz.id_tarea==id_tareaaborrar)


    if (indice < 0) {
        alert('No encontrado')
        return
    } 
    arraytareas.splice(indice,1)
    renderizado()
}

 


function completar(id) {
    const id_tareaacompletar = id
    const indice = arraytareas.findIndex(tareaz =>tareaz.id_tarea==id_tareaacompletar)
    if (indice < 0) {
        alert('No encontrado')
        return
    } 
    console.log(arraytareas[indice].completado)
    if (arraytareas[indice].completado==true)  { 
        arraytareas[indice].completado=false    
    } else
    { 
        arraytareas[indice].completado=true    
    } 
    renderizado()
}



function renderizado(){ 
    html = ''
    let contador = 0
    html+= `<h1>ID--DESCRIPCION TAREA--COMPLETADO</h1>`
    /*<input type="checkbox" onchange="completar(${tarea.id_tarea})" name="my-checkbox" id="id_check" </>*/
    for (let tarea of arraytareas){ 
        //html+= `<li>${tarea.id_tarea} ${tarea.nombre} <input type="checkbox" name="my-checkbox" id="id_check" </> <button onclick="borrar(${tarea.id_tarea})"> Eliminar </button> </li>`
        html+= `<Div>${tarea.id_tarea} ${tarea.nombre} ${tarea.completado} <button onclick="completar(${tarea.id_tarea})"> Cambiar </button> <button onclick="borrar(${tarea.id_tarea})"> Eliminar </button> </div>`
        contador += 1

    }
    let cantidad = arraytareas.filter(tarea => tarea.completado == true)

    lista.innerHTML = html
    valortales.innerHTML = contador;
    valorrealizadas.innerHTML =cantidad.length;
}


/* ( ), Corchetes [ ] y Llaves { } ( ); [ ];{ };< >.  `*/