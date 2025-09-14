const express = require("express");
require("dotenv").config();

const usuariosRoutes = require("./routes/usuarios.routes");
const caracteristicasRoutes = require("./routes/caracteristicas.routes");
const calificacionesRoutes = require("./routes/calificaciones.routes");
const codigosRoutes = require("./routes/codigos.routes");
const chatsRoutes = require("./routes/chats.routes");
const comentariosRoutes = require("./routes/comentarios.routes");
const destinosRoutes = require("./routes/destinos.routes");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Prefijo de la API montaje de las rutas
app.use("/api/usuarios", usuariosRoutes);
app.use("/api/caracteristicas", caracteristicasRoutes);
app.use("/api/calificaciones", calificacionesRoutes);
app.use("/api/codigos", codigosRoutes);
app.use("/api/chats", chatsRoutes);
app.use("/api/comentarios", comentariosRoutes);
app.use("/api/destinos", destinosRoutes)

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});