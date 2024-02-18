import Joi from 'joi';
export class ParamsValidator {
    public static parValid = Joi.object({
        city: Joi.string().min(2).max(20).regex(/^[a-zA-Z]+$/).lowercase().trim(),
        lat: Joi.number(),
        lon: Joi.number()
    });
}
