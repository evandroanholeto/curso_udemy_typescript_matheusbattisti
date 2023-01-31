import mongoose from "mongoose";
import config from "config";
import Logger from "./logger";

async function connect() {
    const dbURI = config.get<string>("dbURI");

    try {
        mongoose.set("strictQuery", false);
        await mongoose.connect(dbURI);
        Logger.info("Conectou ao MongoDB!");
    } catch (e) {
        Logger.error("Não foi possível conectar ao MongoDB!");
        Logger.error(`Erro: ${e}`);
        process.exit(1);
    }
}

export default connect;
