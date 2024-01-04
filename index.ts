import express, { Request, Response } from 'express';
import router from './routes/index';
import User from './database/models/user';



const app = express();
app.use(express.json());

app.use('/api', router);

app.get('/users', async (req: Request, res: Response) => {
  const users = await User.findAll();
  res.json(users);
});

app.get('/users/:id', async (req: Request, res: Response) => {
  const user = await User.findOne({
    where: {
      id: req.params.id
    }
  });
  res.json(user);
});


app.listen(3000, () => {
  console.log('Servidor corriendo en http://localhost:3000');
});

//8948Xyf_