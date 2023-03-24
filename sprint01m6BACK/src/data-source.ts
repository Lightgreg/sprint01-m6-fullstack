import { DataSource } from "typeorm";
import path from "path";
import { User } from "./entities/user.entity";
import { Contacte } from "./entities/contacte.entity";
import { createUsersAndContactes1679498644126 } from "./migrations/1679498644126-create-users-and-contactes";


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
            migrations: [createUsersAndContactes1679498644126],
        }
);

export default AppDataSource;