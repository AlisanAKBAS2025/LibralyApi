import "dotenv/config";
import express, { type Application } from "express";
import routers from "./routers";

const app: Application = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use("/api", routers);

app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});
