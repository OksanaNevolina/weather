import express, {NextFunction} from "express";

import * as swaggerUi from "swagger-ui-express";
import * as swaggerDocument from "./unils/swagger.json";
import {configs} from "./configs/configs";
import {weatherRouter} from "./routers/weather.router";
import {ApiError} from "./errors/api.error";


// process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use("/weather",weatherRouter);
app.use("/swagger", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(
    "*",
    (err: ApiError, req: Request, res: Response, next: NextFunction) => {
        // @ts-ignore
        return res.status(err?.status || 500).json({
            message: err?.message,
            status: err?.status,
        });
    },
);

const PORT = configs.PORT;
app.listen(PORT, () => {
    console.log(`Server has started on PORT ${PORT}`);
});