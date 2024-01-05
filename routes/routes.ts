import { Router, Request, Response } from 'express';
import {AppDataSource}  from '../database/data-source'

const router = Router();

router.get('/', (req: Request, res: Response) => {
  const usuarios = [
    { id: 1, nombre: 'Usuario 1' },
    { id: 2, nombre: 'Usuario 2' },
  ];
  res.json(usuarios);
});

router.post('/', (req: Request, res: Response) => {
  const nuevoUsuario = req.body;
  res.json(nuevoUsuario);
});



router.get('/users', async (req: Request, res: Response) => {

  AppDataSource.manager.
  const users = await User.findAll();
  res.json(users);
});


export default router;