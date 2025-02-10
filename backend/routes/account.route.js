import express from "express";
import { createAccount, deleteAccount, getAccounts, loginAccount, updateAccount } from "../controllers/account.controller.js";

// router for cleaner code
const router = express.Router();

router.get("/", getAccounts);
router.post("/signup" , createAccount);
router.post("/login", loginAccount)
router.put("/:id", updateAccount);
router.delete("/:id", deleteAccount);

export default router;