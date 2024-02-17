import { IQuery } from "../types/weather.query.type";
import { ApiError } from "../errors/api.error";
import {configs} from "../configs/configs";
import axios from "axios";

class WeatherService {
  public async getWeatherCity(query: IQuery) {
    const { city, lat, lon } = query;
    if (!city && !(lat && lon)) {
      throw new ApiError(
        "City name or latitude and longitude are required",
        400,
      );
    }
    try {
     let apiUrl:string;
     if(city){
      apiUrl=`${configs.API_URL}?q=${city}&appid=${configs.API_KEY}&units=metric`
     }else {
       apiUrl=`${configs.API_URL}?lat=${lat}&lon=${lon}&appid=${configs.API_KEY}&units=metric`
     }
     const response = await axios.get(apiUrl);
     const weatherData  = response.data;
    return weatherData
    }catch (e) {
throw new ApiError('Failed to fetch weather data',500)
    }
  }
}
export const weatherService = new WeatherService();
