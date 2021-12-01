import * as controllerPublicaciones from '../controllers/controllerPublicaciones.js'


const routesPublicaciones = (app) => {
    app.get('/instagram',controllerPublicaciones.viewpubli)
    app.post('/instagram',controllerPublicaciones.create)
}  

export default routesPublicaciones
