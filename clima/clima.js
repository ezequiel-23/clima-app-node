const axios = require('axios');

const getClima = async(lat, lng) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=8726879664321e356f16ff6ae34d188f&units=metric`)

    return resp.data.main.temp;

}

module.exports = {
    getClima
}