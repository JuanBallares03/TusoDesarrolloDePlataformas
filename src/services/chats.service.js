const db = require('../config/db.config');

exports.findAll = async () => {
    const [rows] = await db.execute('SELECT * FROM chats');
    return rows;
};

exports.findById = async (id_chat) => {
    const [rows] = await db.execute('SELECT * FROM chats WHERE id_chat = ?', [id_chat]);
    return rows[0];
};

exports.create = async (newChat) => {
    const [result] = await db.execute(
        'INSERT INTO chats () VALUES ()'
    );
    return { id_chat: result.insertId };
};

exports.update = async (id_chat, updatedChat) => {
    // No hay campos para actualizar, solo retorna false
    return false;
};

exports.remove = async (id_chat) => {
    const [result] = await db.execute('DELETE FROM chats WHERE id_chat = ?', [id_chat]);
    return result.affectedRows > 0;
};