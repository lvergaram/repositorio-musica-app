import { Router } from "express"; 
import { cancionController } from "./cancion.controller.js";

const router = Router()

router.get('/', cancionController.getAll)
router.get('/:id', cancionController.getOneById)
router.post('/', cancionController.create)
router.put('/:id', cancionController.update)
router.delete('/:id', cancionController.remove)

export default router