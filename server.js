import express from "express";
import cors from "cors";
import routes from "./Routes/endpoint.js";
const app = express();

app.use(cors());
app.use(express.json());

app.use("/", routes);

const PORT = process.env.PORT || 7000;

app.listen(PORT, () => {
  console.log(`Server started at port ${PORT}`);
});
