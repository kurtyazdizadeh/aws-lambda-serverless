const fetch = require('node-fetch');
const WEATHER_APP_ID = process.env.WEATHER_APP_ID;

exports.getWeather = async (event) => {
  const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${event.Details.Parameters.zipcode},us&units=imperial&appid=${WEATHER_APP_ID}`);
  const json = await res.json();

  if (json.cod === '404') return {
    "success": "False"
  };

  const { temp } = json.main;
  let message = '';

  if (temp >= 90) message = "What a great time to hit the pool!";
  if (temp >= 70 && temp < 90) message = "Sounds like it'll be a nice day!";
  if (temp >= 50 && temp < 70) message = "It's chilly outside, don't forget your jacket!";
  if (temp < 50) message = "It's cold! Layer up!"


  return {
    "success": "True",
    "temp": Math.round(temp),
    "city": json.name,
    "message": message
  };
}
