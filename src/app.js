const express = require("express");
require("dotenv").config();

const calificacionesRoutes = require("./routes/calificaciones.routes");
const caracteristicasRoutes = require("./routes/caracteristicas.routes");
const chatsRoutes = require("./routes/chats.routes");
const codigosRoutes = require("./routes/codigos.routes");
const comentariosRoutes = require("./routes/comentarios.routes");
const destinosRoutes = require("./routes/destinos.routes");
const feedsRoutes = require("./routes/feeds.routes");
const gustosRoutes = require("./routes/gustos.routes");
const invitacionRoutes = require("./routes/invitaciones.routes");
const lugarRoutes = require("./routes/lugares.routes");
const matchRoutes = require("./routes/matches.routes");
const membresiaRoutes = require('./routes/membresias.routes');
const metodoRoutes = require("./routes/metodos.routes");
const notificacionRoutes = require("./routes/notificaciones.routes");
const rolRoutes = require ("./routes/roles.routes");
const ubiRoutes = require("./routes/ubicaciones.routes")
const usuariosRoutes = require("./routes/usuarios.routes");
const viajeRoutes = require("./routes/viajes.routes")



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
app.use("/api/lugares", lugarRoutes);
app.use("/api/matches",matchRoutes);
app.use("/api/membresias", membresiaRoutes);
app.use("/api/metodos" , metodoRoutes);
app.use("/api/notificaciones" , notificacionRoutes);
app.use("/api/roles" , rolRoutes);
app.use("/api/ubicaciones", ubiRoutes);



app.use("/api/usuarios", usuariosRoutes);
app.use("/api/viajes", viajeRoutes)



app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});