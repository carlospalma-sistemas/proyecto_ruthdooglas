const router = require('express').Router();
const operacion = require('../operations/usuarios_operations');

/*
	Archivo de operaciones
	-----------------------------------------
	const operacion = require('<ARCHIVO DE OPERACIONES>');

	Ruta base
	-----------------------------------------
	'/api/usuarios'

	Puntos de conexión (endpoints)
	-----------------------------------------
	crear un dato: 				post('/',      operacion.metodo)
	obtener todos los datos: 	get('/',       operacion.metodo)
	obtener un dato: 			get('/:id',    operacion.metodo)
	modificar un dato: 			put('/:id',    operacion.metodo)
	eliminar un dato: 			delete('/:id', operacion.metodo)
*/

router.get('/', operacion.consultarUsuarios);
router.get('/:id', operacion.consultarUsuario);
router.post('/', operacion.guardarUsuario);
router.put('/:id', operacion.actualizarUsuario);
router.delete('/:id', operacion.borrarUsuario);

module.exports = router