import { DataSource } from "typeorm";
import path from "path";
import { User } from "./entities/user.entity";
import { Contacte } from "./entities/contacte.entity";
import { createUserAndContactes1679448074784 } from "./migrations/1679448074784-createUserAndContactes";


const AppDataSource = new DataSource(
    process.env.NODE_ENV === "test"
        ? {
            type: "sqlite",
            database: ":memory:",
            synchronize: true,
            entities: ["src/entities/*.ts"],
        }
        : {
            type: "sqlite",
            database: "db.sqlite3",
            logging: true,
            synchronize: false,
            entities: [User, Contacte],
            migrations: [createUserAndContactes1679448074784],
        }
);

export default AppDataSource;