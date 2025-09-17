const db = require('../config/db.config');

exports.findAll = async () => {
    const [rows] = await db.execute('SELECT * FROM usuarios');
    return rows;
};

exports.findById = async (id_usuario) => {
    // ✅ CORREGIDO: id_usuario en lugar de id
    const [rows] = await db.execute('SELECT * FROM usuarios WHERE id_usuario = ?', [id_usuario]);
    return rows[0];
};

exports.create = async (newUser) => {
    const [result] = await db.execute(
        'INSERT INTO usuarios (Nombre1, Nombre2, Apellido1, Apellido2, Correo_electronico, Telefono, Fecha_nac, Sexo, Ocupacion, Puntos_xp) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
        [
            newUser.Nombre1, 
            newUser.Nombre2,
            newUser.Apellido1,
            newUser.Apellido2,
            newUser.Correo_electronico,
            newUser.Telefono,
            newUser.Fecha_nac,
            newUser.Sexo,
            newUser.Ocupacion,
            newUser.Puntos_xp
        ]
    );
    return { id_usuario: result.insertId, ...newUser };
};

exports.update = async (id_usuario, updatedUser) => {
    const [result] = await db.execute(
        // ✅ CORREGIDO: id_usuario en lugar de id
        'UPDATE usuarios SET Nombre1 = ?, Nombre2 = ?, Apellido1 = ?, Apellido2 = ?, Correo_electronico = ?, Telefono = ?, Fecha_nac = ?, Sexo = ?, Ocupacion = ?, Puntos_xp = ? WHERE id_usuario = ?',
        [updatedUser.Nombre1, updatedUser.Nombre2, updatedUser.Apellido1, updatedUser.Apellido2, updatedUser.Correo_electronico, updatedUser.Telefono, updatedUser.Fecha_nac, updatedUser.Sexo, updatedUser.Ocupacion, updatedUser.Puntos_xp, id_usuario]);
    return result.affectedRows > 0;
};

exports.remove = async (id_usuario) => {
    // ✅ CORREGIDO: id_usuario en lugar de id
    const [result] = await db.execute('DELETE FROM usuarios WHERE id_usuario = ?', [id_usuario]);
    return result.affectedRows > 0;
};