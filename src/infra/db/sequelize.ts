import { Sequelize } from "sequelize";
import config from "../../config/config";


export class ConnectDB {
    private static instance: Sequelize
    public static initialize(): Sequelize {
        if (process.env.DATABASE_URL) {
            return new Sequelize(process.env.DATABASE_URL);
        }
        return new Sequelize(config.SEQUELIZE.DATABASE, config.SEQUELIZE.USERNAME, config.SEQUELIZE.PASSWORD,
            config.SEQUELIZEOPTIONS
        );
    }

    public static getInstance(): Sequelize {
        if(ConnectDB.instance) {
            return this.instance;
        }
        this.instance = ConnectDB.initialize();
        return this.instance;
    }
}

const newSequelize = (): Sequelize => {
    return ConnectDB.getInstance();
};

export default newSequelize;