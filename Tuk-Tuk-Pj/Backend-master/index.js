import express from "express";
import cors from "cors";
import driverRouter from "./routes/driverRoutes.js";
import passengerRouter from "./routes/passengerRoutes.js"
import feedbackRouter from "./routes/feedbackRoutes.js";
import driverLocationRouter from "./routes/driverLocationRoutes.js";

import mongoose from "mongoose";

const app = express();
app.use(cors());
app.use(express.json({ limit: "10mb" }));


app.get("/", (request, response) => {
  console.log(request);
  return response.status(234).send("Job is working here");
});

app.use("/drivers", driverRouter);
app.use("/passengers",passengerRouter);
app.use("/feedback",feedbackRouter);
app.use("/driverLocation",driverLocationRouter);





mongoose
  .connect(
    "mongodb+srv://thaesupaing:Thae$u74@cluster0.3snwooa.mongodb.net/passenger-collection?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("ThaeSuPaing now get the Data");
    app.listen(3000, () => {
      console.log("ThaeSuPaing is listening to port-[3000]");
    });
  })
  .catch((error) => {
    console.log(error.message);
  });
