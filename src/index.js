import express from "express";
import mockingRouter from "./routes/mocking.routes.js";
import cartsRouter from "./routes/carts.routes.js";
import morgan from "morgan";
import { errorMiddleware } from "./middlewares/error.middlewares.js";

const app = express();
const PORT = 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.use("/api", mockingRouter);
app.use("/api", cartsRouter);

app.use(errorMiddleware);

app.listen(PORT, () => {
  console.log(`Server on port: http://localhost:${PORT}`);
});
