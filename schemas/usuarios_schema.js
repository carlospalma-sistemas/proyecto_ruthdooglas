const mongoose = require ('mongoose');
const { Schema } = mongoose;

const esquema = new Schema({
	"nombres": String,
	"apellidos": String,
	"identificacion": {
		"tipo": String,
		"numero": String
	}
}); 

module.exports = mongoose.model('Usuario', esquema);