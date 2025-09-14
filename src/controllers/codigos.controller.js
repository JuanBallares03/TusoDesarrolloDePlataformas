const codigoService = require('../services/codigos.service');

exports.findAll = async (req, res) => {
    try {
        const codigos = await codigoService.findAll();
        res.status(200).json(codigos);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener usuarios", error });
    }
};

exports.findById = async (req, res) => {
    try {
        const codigo = await codigoService.findById(req.params.id);
        if (!codigo) {
            return res.status(404).json({ message: "Usuario no encontrado" });
        }
        res.status(200).json(codigo);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener el usuario", error });
    }
};

exports.create = async (req, res) => {
    try {
        const newcodigo = await codigoService.create(req.body);
        res.status(201).json(newcodigo);
    } catch (error) {
        res.status(500).json({ message: "Error al crear usuario", error });
    }
};

exports.update = async (req, res) => {
    
    try {
        const updated = await codigoService.update(req.params.id, req.body);
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
        const removed = await codigoService.remove(req.params.id);
        if (!removed) {
            return res.status(404).json({ message: "Usuario no encontrado" });
        }
        res.status(200).json({ message: "Usuario eliminado exitosamente" });
    } catch (error) {
        res.status(500).json({ message: "Error al eliminar usuario", error });
    }
};