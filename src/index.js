import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({
  path: './env'
})

connectDB();

// const app = express();

// (async () => {
//   try {
//     await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);

//     app.on("error", (error) => {
//       console.error("Error:", error);
//       throw error;
//     });

//     app.listen(process.env.PORT, () => {
//       console.log(`Application is running on ${process.env.PORT}`);
//     });
//   } catch (error) {
//     console.error("ERROR", error);
//     throw error;
//   }
// })();
