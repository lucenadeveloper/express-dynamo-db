import { Router } from 'express';
import { ExampleController } from '../controllers/example.controller.js';

const router = Router();
const exampleController = new ExampleController();

router.post('/example', (req, res) => exampleController.create(req, res));
router.get('/example/:id', (req, res) => exampleController.get(req, res));
router.patch('/example/:id', (req, res) => exampleController.update(req, res));
router.delete('/example/:id', (req, res) => exampleController.delete(req, res));
router.get('/example', (req, res) => exampleController.getAll(req, res));

export default router;