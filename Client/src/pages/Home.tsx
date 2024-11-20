import { useEffect, useState } from "react";
import { Socket, io } from "socket.io-client";

const Home = () => {
  const [socket, setSocket] = useState<Socket | null>(null);
  useEffect(() => {
    const newSocket: Socket = io("http://localhost:7000");
    setSocket(newSocket);
    newSocket.on("connect", () => {
      console.log("connected");
    });
    return () => {newSocket.disconnect()}
  }, []);
  return (
    <div>
      <h1>Home</h1>
    </div>
  );
};

export default Home;
