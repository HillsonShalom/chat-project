import { Server, Socket } from "socket.io";
import Service1 from "./service.socket";
import { User } from "../DAL";

class SocketRouter {
  private service1: Service1;
  constructor(private io: Server) {
    this.service1 = new Service1(io);
  }
  connection = async (soc: Socket) => {
    let user: User
    console.log(`connection: ${soc.id}`);


    soc.on('disconnect', () => {
        console.log("disconnection");
    })
  };
}

export default SocketRouter;
