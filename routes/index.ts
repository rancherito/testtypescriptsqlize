import { Router, Request, Response } from 'express';

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

export default router;