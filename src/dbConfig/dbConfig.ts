import mongoose from "mongoose";

export async function connect() {
  try {
    mongoose.connect(process.env.MONGO_URL!);
    const connection = mongoose.connection;

    connection.on("connected", () => {
      console.log("mongo db succesfull");
    });
    connection.on("error", (err) => {
      console.log("something went wrong in connection +" + err);
    });
  } catch (error) {
    console.log("something went wrong ");
  }
}
