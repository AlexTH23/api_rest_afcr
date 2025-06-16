//Configuracion.js
const CONFIG = require('./app/config/configuracion')
 
//App.js
const app = require('./app/app')

app.listen(CONFIG.PORT, ()=>{
    console.log(`Aplicacion corriendo en puerto ${CONFIG.PORT}`);
})
