import { IWeatherResponse } from "../types/weather.response";

export class WeatherPresenter {
    public static weatherToResponse(weatherDate: IWeatherResponse): any {
        return {
            coord: {
                lon: weatherDate.coord.lon,
                lat: weatherDate.coord.lat
            },
            weather: {
                id: weatherDate.weather.map(i => i.id)[0],
                main: weatherDate.weather.map(i => i.main)[0],
                description: weatherDate.weather.map(i => i.description)[0],
                icon: weatherDate.weather.map(i => i.icon)[0]
            },
            base: weatherDate.base,
            main: {
                temp: weatherDate.main.temp,
                feels_like: weatherDate.main.feels_like,
                temp_min: weatherDate.main.temp_min,
                temp_max: weatherDate.main.temp_max,
                pressure: weatherDate.main.pressure,
                humidity: weatherDate.main.humidity
            },
            visibility: weatherDate.visibility,
            wind: {
                speed: weatherDate.wind.speed,
                deg: weatherDate.wind.deg
            },
            clouds: {
                all: weatherDate.clouds.all
            },
            dt: weatherDate.dt,
            sys: {
                type: weatherDate.sys.type,
                id: weatherDate.sys.id,
                country: weatherDate.sys.country,
                sunrise: weatherDate.sys.sunrise,
                sunset: weatherDate.sys.sunset
            },
            timezone: weatherDate.timezone,
            id: weatherDate.id,
            name: weatherDate.name,
            cod: weatherDate.cod
        };
    }
}
