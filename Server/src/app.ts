import env from "dotenv";
import express from "express";
import socketIO from "socket.io";
import http from "http";
import cookieParser from "cookie-parser";
import path from "path";
import { connection } from "./DAL";
import router from "./routes";

env.config({
  path: process.env.NODE_ENV === "prd" ? "./.env" : "./.env.test",
});

export class Application {
  server: http.Server;
  app: express.Application;
  io: socketIO.Server;
  port: string | number;

  constructor() {
    this.connect()
    this.app = this.createApp()
    this.port = this.config()
    this.server = this.createServer()
    this.io = this.sockets()
    this.listen()
  }
  private createApp = () => {
    const app = express();
    app.use(express.json())
    app.use(cookieParser())
    app.use(express.static(path.join(__dirname, "../../Client/dist")));
    app.use('/api', router)
    return app
  };
  private config = () => {
    return process.env.PORT || 5000
  }
  private createServer = () => {
    return http.createServer(this.app)
  };
  private sockets = () => {
    return new socketIO.Server(this.server)
  }
  private listen = () => {
    this.server.listen(this.port, () => {
        console.log(`Listening at http://localhost:${this.port}/ ...`);
    })
  }

  private connect = () => {
    connection();
  }
}


const app: Application = new Application()


export default app

