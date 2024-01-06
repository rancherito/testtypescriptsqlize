import { Router, Request, Response } from 'express';
import PhotoRepo from '../database/rempository-models'
import { PhotoModel } from '../models/Photo';
import { randomUUID } from 'crypto';



const router = Router();

router.post('/', async (req: Request, res: Response) => {
  const { name, description } = req.body;


  const newPhoto = new PhotoModel(
    randomUUID(),
    name,
    description,
    "a file",
    5,
    false
  )

  //save
  await PhotoRepo.save(newPhoto)

  res.json(newPhoto);
});



router.get('/users', async (req: Request, res: Response) => {
  const nose = await PhotoRepo.find()
  res.json(nose);
});


export default router;