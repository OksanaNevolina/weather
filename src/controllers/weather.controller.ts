import {NextFunction, Request, Response} from "express";
import {IQuery} from "../types/weather.query.type";
import {weatherService} from "../services/weatherService";
import {IWeatherResponse} from "../types/weather.response";
import {WeatherPresenter} from "../presenters/weather.presenter";

class WeatherController {
  public async getWeatherCity(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<IWeatherResponse> {
    try {
      const data = await weatherService.getWeatherCity(req.query as IQuery);
      const presentedWeathers = WeatherPresenter.weatherToResponse(data);
      return res.json({ presentedWeathers });
    } catch (e) {
      next(e);
    }
  }
}
export const weatherController = new WeatherController();
