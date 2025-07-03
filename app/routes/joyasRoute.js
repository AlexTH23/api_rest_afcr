const express = require('express')
const router = express.Router()
//controlador de joyas
const joyasController = require('../controllers/joyasController')

router.get('/', joyasController.buscarTodo)

//Vamos a crear el router y desde aqui vamos hacer todas las rutas y vamos a exportarlo para que lo lea APP
module.exports=router