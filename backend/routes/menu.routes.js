const { Router } = require('express')
const menuControllers = require('../controllers/menu.controllers');
const router = Router();
const tokenFunctions = require('../middlewares/verifyToken')


console.log(tokenFunctions)
//router.get('/laruta', el middleware, el controlador)
router.get('/showAll', tokenFunctions.verifyToken, menuControllers.showMenu)
router.post('/createMenu', tokenFunctions.verifyToken, menuControllers.create)
router.put("/updateMenu/:id_menu", menuControllers.updateMenu)



module.exports = router