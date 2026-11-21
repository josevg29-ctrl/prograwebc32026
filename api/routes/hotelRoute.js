
const express = require('express');
const router = express.Router();
const Hotel = require('../models/hotel');

//Get como lo teniamos el hotel api
router.get('/', async (req, res) => {
    try {
        const hotel = await Hotel.find();
        res.json(

            {
                code: 200,
                message: "Consulta realizada correctamente",
                data: hotel
            });


    }
    catch (error) {
        res.status(500).json({
            message: error.message
        })
    }


});


module.exports = router;


// {
//   "code": 200,
//   "message": "Consulta realizada correctamente",
//   "data": [
//     {
//       "_id": "6b0105743bcca29ca6a623a8",
//       "nombre": "Hotel Paradise",
//       "descripcion": "Hotel 5 estrellas",
//       "telefono": "2222-2222",
//       "correo": "hotel@gmail.com",
//       "sitio_web": "https://hotel.com",
//       "usuario": "Mario"
//     }
//   ]
// }


//       "id": 413,
//       "nombre": "Yourrrrr",
//       "descripcion": "jasdfnon",
//       "telefono": "2134234544",
//       "correo": "mmora@gmail.com",
//       "sitio_web": "http:www.mishuevos.com",
//       "usuario": "charrrr",
//       "fecha_creacion": "2026-11-20 21:31:01",
//       "estado": "Activo"