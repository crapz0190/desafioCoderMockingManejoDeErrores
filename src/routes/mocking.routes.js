import { Router } from "express";
import { generateProduct } from "../faker.js";

const router = Router();

router.get("/mockingproducts", (req, res) => {
  const products = generateProduct(100);
  res.json({ products });
});

export default router;
