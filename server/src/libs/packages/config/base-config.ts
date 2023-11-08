import { config } from 'dotenv';
import { type EnvironmentSchema } from './libs/types';

class BaseConfig {
  public env: EnvironmentSchema;

  public constructor() {
    config();

    this.env = this.envSchema;
  }

  private get envSchema(): EnvironmentSchema {
    return {
      MYSQL: {
        USER: process.env.MYSQL_USER as string,
        PASSWORD: process.env.MYSQL_PASSWORD as string,
        DB: process.env.MYSQL_DB as string,
      },
      APP: {
        PORT: process.env.PORT as string,
      },
    };
  }
}

export { BaseConfig };
