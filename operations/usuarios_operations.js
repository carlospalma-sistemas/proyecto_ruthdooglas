const coleccionusuarios = require('../schemas/usuarios_schema')
const operaciones = {};

operaciones.consultarUsuarios = async function(req, res) {
	try {
		const usuarios = await coleccionusuarios.find()
		if (usuarios != null) {
			res.status(200).json(usuarios);
		}
		else {
			res.status(404).json({"message": "Que pena, no hay usuarios"})
		}
	}
	catch {
		res.status(401).json({"message": "No le entendí"})
	}
}

operaciones.consultarUsuario = async function(req, res) {
	try {
		const usuario = await coleccionusuarios.findById(req.params.id)
		if (usuario != null) {
			res.status(200).json(usuario);
		}
		else {
			res.status(404).json({"message": "Que pena, no encontré el usuario"})
		}
	}
	catch {
		res.status(401).json({"message": "No le entendí"})
	}
}

operaciones.guardarUsuario = async function(req, res) {
	try {
		const usuario = new coleccionusuarios(req.body)
		await usuario.save()
		res.status(201).json(usuario);	
	}
	catch {
		res.status(401).json({"message": "No le entendí"})
	}
}

operaciones.actualizarUsuario = async function(req, res) {
	try {
		const id = req.params.id
		const usuario = {
			nombres: req.body.nombres,
	    	apellidos: req.body.apellidos,
	    	identificacion : {
	    		tipo: req.body.identificacion.tipo,
	        	numero: req.body.identificacion.numero
	        }
	    }
	    await coleccionusuarios.findByIdAndUpdate(id, {$set: usuario}, {new: true});
		res.status(200).json(usuario);
	}
	catch {
		res.status(401).json({"message": "No le entendí"})
	}
}

operaciones.borrarUsuario = async function(req, res) {
	try {
		const id = req.params.id
		await coleccionusuarios.findByIdAndRemove(id)
		res.status(200).json({"message": "Usuario borrado"});
	}
	catch{
		res.status(401).json({"message": "No le entendí"})
	}
}

module.exports = operaciones