const express = require("express");
const useRoutes = require("./routes/user.routes");
const { use } = require("react");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Prefijo de la API montaje de las rutas

app.use("/api/calificaciones" , useRoutes)
app.use("/api/caracteristicas", useRoutes)
app.use("/api/chats", useRoutes)
app.use("/api/codigos", useRoutes)
app.use("/api/comentarios", useRoutes)
app.use("/api/usuarios", useRoutes)

app.listen(PORT, ()=>{
    console.log(`Servidor corriendo en http://localhost:${PORT}`)
})
