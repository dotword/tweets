import dotenv from 'dotenv';
import server from "./src/server.js";

dotenv.config();

const PORT = process.env.PORT || 3001;

server.listen(PORT, () => {
    console.log(`Servidor escuchando en puerto ${PORT}`);
});
