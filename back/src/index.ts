import server from "./server";
import {PORT} from "./Config/envs"
import "reflect-metadata"
import { AppDataSource } from "./Config/data-source";



AppDataSource.initialize().then(() => {
    server.listen(3005, () => console.log("Server running on port 3005"))
})

