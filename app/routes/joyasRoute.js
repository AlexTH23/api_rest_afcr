const express = require('express')
const router = express.Router()

router.get('/anillo', (req,res)=>{
    res.json({
        mensaje: "Hola mundo"
    })
})

//Vamos a crear el router y desde aqui vamos hacer todas las rutas y vamos a exportarlo para que lo lea APP
module.exports=router