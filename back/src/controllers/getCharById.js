// Declaración de la función getCharById
const axios = require("axios");
const URL = "http://be-a-rym.up.railway.app/api"
const KEY = "09d38d0a379a.47ee58661aa6af2a95d7";


function getCharById(res, id) {



  // Hacemos la petición utilizando Axios
  axios
    .get(`${URL}/character/${id}`)
    .then((response) => {
      // Si la petición es exitosa, hacemos algo con los datos recibidos
      const {id, image, name, gender ,species } = response.data;
      res.writeHead(200, {"Content-Type": "application/json"});
      res.end (JSON.stringify ({id, image, name, gender ,species}))
    })
    
    .catch((error) => {
      // Si hay algún error, lo manejamos aquí
      console.error(error);
      res.status(500).send("Ha ocurrido un error al obtener el personaje");
    });
}

module.exports = getCharById;

