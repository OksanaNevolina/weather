import {Request,Response,NextFunction} from "express";
import {IQuery} from "../types/weather.query.type";
import {weatherService} from "../services/weatherService";
import {IWeatherResponse} from "../types/weather.response";

class WeatherController {
public async getWeatherCity(req:Request,res:Response,next:NextFunction):Promise<IWeatherResponse>{
try {
    const data = await weatherService.getWeatherCity(req.query as IQuery);
    return res.json({data})
}catch (e) {
    next(e)
}
}
}
export const weatherController = new WeatherController();