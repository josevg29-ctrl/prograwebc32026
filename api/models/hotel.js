const mongoose = require('mongoose');


const hotelSchema = new mongoose.Schema(
    {
        nombre: {
            type: String,
            required: true
        },
        descripcion: {
            type: String,
            required: true
        },
        telefono: {
            type: String,
            required: true
        },
        correo: {
            type: String,
            required: true
        },
        sitio_web: {
            type: String,
            required: true
        },
        usuario: {
            type: String,
            required: true
        }
    }
);

module.exports = mongoose.model('hotel', hotelSchema);

//{ "nombre":"Hotel Paradise", "descripcion":"Hotel 5 estrellas", "telefono":"2222-2222", "correo":"hotel@gmail.com","sitio_web":"https://hotel.com", "usuario":"Mario" } 

