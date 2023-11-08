import { database } from '../../libs/database/database';
import { Task } from './task.entity';
import { TasksController } from './tasks.controller';

const taskRepository = database.dataSource.getRepository(Task);
const tasksController = new TasksController(taskRepository);

export { tasksController };
