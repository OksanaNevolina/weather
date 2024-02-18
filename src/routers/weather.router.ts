import { Router } from "express";
import { weatherController } from "../controllers/weather.controller";
import { weatherMiddleware } from "../middlewares/weahter.middleware";
import {ParamsValidator} from "../validators/params.validator";

const router = Router();

router.get(
  "/",
  weatherMiddleware.isParamsValid(ParamsValidator.parValid),
  weatherMiddleware.checkParameters,
  weatherController.getWeatherCity,
);

export const weatherRouter = router;
