import { Router } from "express";
import systemController from "../controllers/system.controllers"


const router = Router();

router.get('/ports', systemController.listPorts);

export default router