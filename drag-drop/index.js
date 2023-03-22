const parrafos= document.querySelectorAll("p")
const secciones= document.querySelectorAll(".seccion")
const basura= document.querySelectorAll(".basurero")
parrafos.forEach(parrafo =>{
    parrafo.addEventListener("dragstart", event =>{
        parrafo.classList.add("draging")
        event.dataTransfer.setData("id", parrafo.id)
    })
    parrafo.addEventListener("dragend", ()=>{
        parrafo.classList.remove("draging")
    })
})
secciones.forEach(seccion=>{
    seccion.addEventListener("dragover", event=>{
        event.preventDefault()
    })
    seccion.addEventListener("drop", event =>{
        const id_parrafo = event.dataTransfer.getData("id")
        const parrafo = document.getElementById(id_parrafo)
        seccion.appendChild(parrafo)
    })
})
basura.forEach( basureo=>{
    basureo.addEventListener("dragover", event=>{
        event.preventDefault()
    })
    basureo.addEventListener("drop", event=>{
        const id_parrafo= event.dataTransfer.getData("id")
        const parrafo= document.getElementById(id_parrafo)
        basureo.appendChild(parrafo)
        basureo.removeChild(parrafo)
    })
})
