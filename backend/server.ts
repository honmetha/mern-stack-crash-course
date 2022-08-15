import express, { Express, Request, Response, NextFunction } from "express";
import dotenv from "dotenv";
import workoutRoutes from "./routes/workouts";
import mongoose from "mongoose";

dotenv.config();

// express app
const app: Express = express();
const port = process.env.PORT;

// middleware
app.use(express.json());

app.use((req: Request, res: Response, next: NextFunction) => {
  console.log(req.path, req.method);
  next();
});

// routes
app.use("/api/workouts", workoutRoutes);

// connect to db
mongoose
  .connect(`${process.env.MONGO_URI}`)
  .then(() => {
    // listen for requests
    app.listen(port, () => {
      console.log("connected to db & listening on port", port);
    });
  })
  .catch((error) => console.log(error));
