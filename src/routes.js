import { Router } from 'express';

const routes = new Router();

routes.get('/', (req, res) => res.json({ message: 'Gabriel Oliveira' }));

export default routes;
