const mongoose = require('mongoose');
const database = "Base_datos";
const password = "Uiscsm8a09";
const URL = "mongodb+srv://DOO:"+password+"@cluster0.zrk7b.mongodb.net/"+database+"?retryWrites=true&w=majority";

mongoose.connect(URL)
	.then(db => console.log("Base de datos Atlas en linea"))
	.catch(err=> console.log(err))

module.exports = mongoose;

