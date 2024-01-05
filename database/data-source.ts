import { DataSource } from "typeorm";
import { Photo } from "../models/Photo";

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "12345678",
    database: "desarrollo",
    entities: [Photo],
    synchronize: true,
    logging: false
})