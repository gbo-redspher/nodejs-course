import express from "express";
import PingRouter from "./ping.router";
// import pingController from "../controllers/ping.controller";
import CalcRouter from "./calc.router";

const router = express.Router();

router.use("/ping", PingRouter);
router.use("/calc", CalcRouter);

export = router;