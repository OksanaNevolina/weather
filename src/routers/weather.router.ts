import { Router } from "express";
import { weatherController } from "../controllers/weather.controller";

const router = Router();

router.get("/", weatherController.getWeatherCity);

export const weatherRouter = router;
