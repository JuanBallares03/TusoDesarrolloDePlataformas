const comentarioService = require('../services/codigos.service');

exports.findAll = async (req, res) => {
    try {
        const comentarios = await comentarioService.findAll();
        res.status(200).json(comentarios);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener usuarios", error });
    }
};

exports.findById = async (req, res) => {
    try {
        const comentario = await comentarioService.findById(req.params.id);
        if (!comentario) {
            return res.status(404).json({ message: "Usuario no encontrado" });
        }
        res.status(200).json(comentario);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener el usuario", error });
    }
};

exports.create = async (req, res) => {
    try {
        const newcomentario = await comentarioService.create(req.body);
        res.status(201).json(newcomentario);
    } catch (error) {
        res.status(500).json({ message: "Error al crear usuario", error });
    }
};

exports.update = async (req, res) => {
    
    try {
        const updated = await comentarioService.update(req.params.id, req.body);
        if (!updated) {
            return res.status(404).json({ message: "Usuario no encontrado" });
        }
        res.status(200).json({ message: "Usuario actualizado exitosamente" });
    } catch (error) {
        res.status(500).json({ message: "Error al actualizar usuario", error });
    }
};

exports.remove = async (req, res) => {
    try {
        const removed = await comentarioService.remove(req.params.id);
        if (!removed) {
            return res.status(404).json({ message: "Usuario no encontrado" });
        }
        res.status(200).json({ message: "Usuario eliminado exitosamente" });
    } catch (error) {
        res.status(500).json({ message: "Error al eliminar usuario", error });
    }
};