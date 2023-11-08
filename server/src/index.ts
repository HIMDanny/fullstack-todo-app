import cors from 'cors';
import express from 'express';
import { config } from './libs/packages/config/config';
import { tasksController } from './packages/tasks/tasks';
import { database } from './libs/database/database';
import 'reflect-metadata';

const app = express();

app.use(express.json());
app.use(cors());

const PORT = config.env.APP.PORT;

app.use('/tasks', tasksController.router);

database
  .initialize()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is listening on: http://localhost:${PORT}`);
    });
    console.log('Data Source has been initialized.');
  })
  .catch((err) => {
    console.error('Error during initialization', err);
  });
