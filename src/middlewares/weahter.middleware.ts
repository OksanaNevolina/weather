import { NextFunction, Request, Response } from "express";
import { ObjectSchema } from "joi";
import { ApiError } from "../errors/api.error";
import { IQuery } from "../types/weather.query.type";

class WeatherMiddleware {
  public checkParameters(req: Request, res: Response, next: NextFunction) {
    try {
      const { city, lat, lon } = req.query as IQuery;
      if (!city && !(lat && lon)) {
        throw new ApiError(
          "City name or latitude and longitude are required",
          400,
        );
      }
      next();
    } catch (e) {
      next(e);
    }
  }
  public isParamsValid(validator: ObjectSchema) {
    return function (req: Request, res: Response, next: NextFunction) {
      try {
        const { error, value } = validator.validate(req.query);
        if (error) {
          throw new ApiError(error.details[0].message, 400);
        }
        req.query = value;

        next();
      } catch (e) {
        next(e);
      }
    };
  }
}
export const weatherMiddleware = new WeatherMiddleware();
