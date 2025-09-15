const express = require("express");
require("dotenv").config();

const calificacionesRoutes = require("./routes/calificaciones.routes");
const caracteristicasRoutes = require("./routes/caracteristicas.routes");
const chatsRoutes = require("./routes/chats.routes");
const codigosRoutes = require("./routes/codigos.routes");
const comentariosRoutes = require("./routes/comentarios.routes");
const destinosRoutes = require("./routes/destinos.routes");
const feedsRoutes = require("./routes/feeds.routes")
const gustosRoutes = require("./routes/gustos.routes")
const invitacionRoutes = require("./routes/invitaciones.routes")



const usuariosRoutes = require("./routes/usuarios.routes");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Prefijo de la API montaje de las rutas
app.use("/api/calificaciones", calificacionesRoutes);
app.use("/api/caracteristicas", caracteristicasRoutes);
app.use("/api/chats", chatsRoutes);
app.use("/api/codigos", codigosRoutes);
app.use("/api/comentarios", comentariosRoutes);
app.use("/api/destinos", destinosRoutes);
app.use("/api/feeds",feedsRoutes);
app.use("/api/gustos",gustosRoutes);
app.use("/api/invitaciones",invitacionRoutes);
app.use("/api/usuarios", usuariosRoutes);


app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});