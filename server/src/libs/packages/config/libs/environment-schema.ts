type EnvironmentSchema = {
  APP: {
    PORT: string;
  };
  MYSQL: {
    USER: string;
    PASSWORD: string;
    DB: string;
  };
};

export { type EnvironmentSchema };
