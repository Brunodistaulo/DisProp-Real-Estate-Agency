import server from "./server";
import "reflect-metadata"
import { AppDataSource } from "./Config/data-source";



AppDataSource.initialize().then(() => {
    server.listen(`${process.env.PORT}`, () => console.log("Server running on port 3005"))
})

