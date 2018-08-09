const axios = require('axios');


const getClima = async(lat, lng) => {

    let resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=8b99acdf34883bb553e85e4135a3ef76`);

    return resp.data.main.temp;
}

module.exports = {
    getClima
}