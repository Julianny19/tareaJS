const nombre ="julianny";
const apellido ="Camacho";
const persona ={nombre,apellido}
sessionStorage.setItem("personas", JSON.stringify(persona))
localStorage.setItem("personas", JSON.stringify(persona))
document.cookie=`personaCaducidad=${persona};expires=`+ new Date(2023,2,20,18,30).toUTCString()