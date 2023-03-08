const logger = require('./logger');
let funcionError= val=>{
    if(typeof val === "number"){
        return 2 * val
    }
    throw new Error("el valor debe ser un numero")
};
let numero="no soy un numero"
try{
    let intento =funcionError(numero);
    console.log(intento);

}catch(e){
    console.error("ERROR");
} 