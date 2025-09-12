const express = require("express");
const useRoutes = require("./routes/user.routes")
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Prefijo de la API montaje de las rutas

app.use("/api/usuarios", useRoutes);
app.use("/api/calificaciones" , useRoutes)
app.use("/api/caracteristicas", useRoutes)
app.use("/api/chats", useRoutes)

app.listen(PORT, ()=>{
    console.log(`Servidor corriendo en http://localhost:${PORT}`)
})
