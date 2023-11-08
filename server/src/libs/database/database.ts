import { DataSource } from 'typeorm';
import { config } from '../packages/config/config';
import { Task } from '../../packages/tasks/task.entity';

class Database {
  public dataSource: DataSource;

  public constructor() {
    this.dataSource = new DataSource({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: config.env.MYSQL.USER,
      password: config.env.MYSQL.PASSWORD,
      database: config.env.MYSQL.DB,
      synchronize: true,
      entities: [Task],
    });
  }

  public initialize(): Promise<DataSource> {
    return this.dataSource.initialize();
  }
}

const database = new Database();

export { database };
