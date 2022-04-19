import cors from 'cors';
import express from 'express';

class App {
  public express: express.Application;

  constructor() {
    this.express = express();
    this.middlewares();
    this.routes();
  }

  private middlewares = (): void => {
    this.express.use(express.json());
    this.express.use(cors());
  };

  private routes = (): void => {
    this.express.get('/', (_, res) => {
      return res.send('Hello World');
    });
  };
}

export default new App().express;
