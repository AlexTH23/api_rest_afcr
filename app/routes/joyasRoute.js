const express = require('express')
const router = express.Router()
//controlador de joyas
const joyasController = require('../controllers/joyasController')

router.get('/', joyasController.buscarTodo)
    .post('/',joyasController.agregarJoya)
    //manda a llamar la llave y el recurso
    //.get('/:key/:value',joyasController.buscarJoya) este se actualizo para mostrar joya, aqui entra en funcionamiento el "next"
    .get('/:key/:value',joyasController.buscarJoya, joyasController.mostrarJoya)
    //Hace que el buscar joya con el next sea el siguiente pero en borrar la joya
    .delete('/:key/:value',joyasController.buscarJoya,joyasController.eliminarJoya)
    .put('/:key/:value', joyasController.buscarJoya, joyasController.actualizarJoya)


//Vamos a crear el router y desde aqui vamos hacer todas las rutas y vamos a exportarlo para que lo lea APP
module.exports=router