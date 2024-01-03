import express, { Request, Response } from 'express';
import router from './routes/index';
import sequelize from './database/index'; // Importa la configuración de Sequelize

async function initialize() {
    await sequelize.sync({ force: true }); // Esto creará las tablas basadas en tus modelos
    // Resto de tu código de inicialización...
}

initialize();


const app = express();
app.use(express.json());

app.use('/api', router);

app.listen(3000, () => {
  console.log('Servidor corriendo en http://localhost:3000');
});

//8948Xyf_