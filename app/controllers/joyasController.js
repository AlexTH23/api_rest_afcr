const joyasModel = require('../models/joyasModel')

function buscarTodo(req,res){
    joyasModel.find({})
    .then(joyas => {
        if(joyas.length){
            return res.status(200).send({joyas})
        }
        return res.status(204).send({mensaje:"No hay nada que mostrar"})
    })
    .catch(e => {return res.status(404).send({mensaje: `error al consultar la informacion ${e}`})})  
}


// Vamos a crear otra funcion que se llame "agregarJoya"
// Recaba la informacion y ejecuta un nuevo modelo, esa informacion va a ser extraida del body
//como es el metodo de una dependencia ".save" debe llevar una promesa
function agregarJoya(req,res){
//-----------    console.log(req.body)
    new joyasModel(req.body).save()
    .then(info => {
        //Codigo 200 significa "OK"
        return res.status(200).send({
            mensaje:"La informacion se guardo de forma correcta",
            info
        }) 
    })
    .catch(e =>{return res.status(404).send({mensaje:`error al guardar ${e}`})})
}  //vamos al router

//El next sirve para ejecutar la funcion y despues ejecutar una adicional o en la misma sintaxis ejecutar 2 funciones al mismo tiempo
function buscarJoya(req,res,next){
    var consulta ={}
    // Se van a mandar mediante la URL y se concatena una solicitud con value
    consulta[req.params.key] = req.params.value
    //se llama la consola para saber que esta pasando
//--------    console.log(consulta)
    //mandar a llamar al modelo, vamos a ejecutar un find y vamos a buscar a consulta
    joyasModel.find(consulta)
    .then(joyas => {
        if(!joyas.length) return next;
        //En este req.body estamos creando una vareable que se llama joyas que va dentro de la solicitud .body y se returna el next
        req.body.joyas = joyas
        return next()
    })//Crea variable en el body para error
    .catch(e => {
        req.body.e = e
        return next()
    })
    //la funcion de buscar joyas sirve para buscar y eliminar pero para no repetir el mismo codigo de eliminar y actualizar
}

function mostrarJoya(req,res){
    /*pregunta si existe req.body si es el caso entonces regresa una respuesta con un estatus 404 y mandes un mensaje que diga
    "error al buscar la informacion", caso contrario si es diferente de req.body va a retornar una respuesta con un estatus 204 porque
    no hay informacion*/
    if(req.body.e)return res.status(404).send({mensaje:`error al buscar la informacion`})
    if(!req.body.joyas) return res.estatus(204).send({mensaje:"No hay nada que mostrar"})
        //Se crea una variable para mandar el estatus, este recibe la variable contenida del body.joyas a una nueva llamada joyas
    let joyas = req.body.joyas
    return res.status(200).send({joyas})
}

module.exports = {
    buscarTodo,
    agregarJoya,
    buscarJoya,
    mostrarJoya
}