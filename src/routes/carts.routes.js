import { Router } from "express";
import { generateCart } from "../faker.js";
import CustomError from "../errors/errors.generator.js";
import { ErrorsMessages, ErrorsNames } from "../errors/errors.messages.js";

const router = Router();

router.get("/carts", (req, res, next) => {
  try {
    const carts = generateCart();

    res.status(200).json({
      message: "Product added to cart successfully",
      carts,
    });
  } catch (error) {
    CustomError.generateError(
      ErrorsMessages.INTERNAL_SERVER_ERROR,
      500,
      ErrorsNames.CART_LOAD_FAILURE,
    );
  }
});

export default router;
