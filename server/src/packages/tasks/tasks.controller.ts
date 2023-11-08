/* eslint-disable @typescript-eslint/no-unused-vars */
import { Router, type Request, type Response } from 'express';
import { Repository } from 'typeorm';
import { Task } from './task.entity';
import { createTaskValidator, updateTaskValidator } from './tasks.validator';
import { validationResult } from 'express-validator';

class TasksController {
  public router = Router();

  private taskRepository: Repository<Task>;

  public constructor(taskRepository: Repository<Task>) {
    this.taskRepository = taskRepository;

    this.router.get('/', this.getAll);
    this.router.post('/', createTaskValidator, this.create);
    this.router.put('/:id', updateTaskValidator, this.update);
  }

  private getAll = async (req: Request, res: Response): Promise<void> => {
    try {
      const tasks = await this.taskRepository.find({
        order: {
          date: 'ASC',
        },
      });

      res.send(tasks);
    } catch (error) {
      res.status(500).send({ message: 'Internat Server Error.' });
    }
  };

  private create = async (
    req: Request<unknown, unknown, Task>,
    res: Response,
  ): Promise<void> => {
    try {
      const errors = validationResult(req as Request);

      if (!errors.isEmpty()) {
        res.status(400).send({ errors: errors.array() });
        return;
      }

      const task = new Task();
      task.title = req.body.title;
      task.date = req.body.date;
      task.description = req.body.description;
      task.priority = req.body.priority;
      task.status = req.body.status;

      const createdTask = await this.taskRepository.save(task);

      res.status(201).send(createdTask);
    } catch (error) {
      res.status(500).send({ message: 'Internat Server Error.' });
    }
  };

  private update = async (
    req: Request<{ id: string }, unknown, Pick<Task, 'status' | 'priority'>>,
    res: Response,
  ) => {
    try {
      const errors = validationResult(req as Request);

      if (!errors.isEmpty()) {
        res.status(400).send({ errors: errors.array() });
        return;
      }

      const task = await this.taskRepository.findOneBy({ id: req.params.id });

      if (!task) {
        res
          .status(404)
          .send({ message: 'The task with given ID does not exist.' });
        return;
      }

      if (req.body.status) {
        task.status = req.body.status;
      }

      if (req.body.priority) {
        task.priority = req.body.priority;
      }

      await this.taskRepository.save(task);

      res.status(200).send(task);
    } catch (error) {
      res.status(500).send({ message: 'Internat Server Error.' });
    }
  };
}

export { TasksController };
