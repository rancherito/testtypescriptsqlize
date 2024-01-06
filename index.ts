import express, { Request, Response } from 'express';
//import cors
import cors from 'cors'
import router from './routes/routes';


import { AppDataSource } from './database/data-source';

AppDataSource.initialize()
    .then(() => {
        // here you can start to work with your database
        console.log('Conectado a la base de datos x2');
    })
    .catch((error) => console.log(error))



const app = express();
app.use(express.json());
//app.use(cors());

app.use('/api', router);


app.listen(3000, () => {
  console.log('Servidor corriendo en http://localhost:3000');
});

//8948Xyf_