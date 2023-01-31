// ENV variables
require("dotenv").config();

import express from "express"
import config from "config"

const app = express();

// JSON middleware
app.use(express.json());

// MongoDB
import db from "../config/db";

// Routes
import router from "./router";

app.use("/api/", router);

// Logger
import Logger from "../config/logger";

// APP port
const port = config.get<number>("port");

app.listen(port, async () => {
    Logger.info("app.listen");
    
    await db();

    Logger.info(`Aplicação está funcionando na porta: ${port}`);
});
