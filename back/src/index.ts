import server from "./server";
import {PORT} from "./Config/envs"


server.listen(PORT, () => console.log("Server running on port 3000"))