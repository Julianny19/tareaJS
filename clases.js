class Estudiante{
        #nombre
        #asignaturas
    constructor(nombre,asignaturas){
        this.#nombre=nombre
        this.#asignaturas= ["HTML","css","javascript"]
    }
    getNombre(){
        return this.#nombre
    }
    getAsignaturas(){
        return this.#asignaturas
    }

}

const estudiante = new Estudiante("julianny",[0]);

console.log(estudiante.getNombre())
console.log(estudiante.getAsignaturas()[0])
