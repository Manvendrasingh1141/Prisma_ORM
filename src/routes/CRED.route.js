import { Router } from "express";
import crudControllers from "../controllers/CRUD.controller.js";

const appRouter = Router();

appRouter.get('/get',crudControllers.fetchData);
appRouter.post('/create',crudControllers.createData);
appRouter.put('/update:id',crudControllers.updateData);
appRouter.delete('/delete:id',crudControllers.deleteData);

export default appRouter;