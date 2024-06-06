

import { Router } from "express";
import {
  AddToCart,
  Logout,
  login,
  register,
  validateToken,
  // Logout,
  // addToCart,
  // addToWishlist
} from "../controllers/user.controllers.js";

// // Import the new controller
// import { getCartProducts } from "../controllers/user.controllers.js";


// // Import the checkout controller
// import { checkout } from "../controllers/user.controllers.js";

const router = Router();

router.post("/register", register);
router.post("/login", login);
router.get("/validate-token", validateToken);
router.get("/logout",Logout);
router.post("/add-to-cart", AddToCart);

export default router;