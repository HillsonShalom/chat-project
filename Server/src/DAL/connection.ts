import { connect } from "mongoose";

const connection = async () => {
  try {
    await connect(process.env.CONNECTION_STRING as string)
    console.log("Successfully connected to DB");
  } catch (err) {
    console.error((err as Error).message)
  }
};

export default connection;
