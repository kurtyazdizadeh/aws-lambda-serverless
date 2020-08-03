const fetch = require('node-fetch');

exports.getDadJoke = async (event) => {
  const params = {
    headers: {
      'Accept': 'application/json'
    }
  };
  const res = await fetch('https://icanhazdadjoke.com/', params);
  const json = await res.json();

  if (json.status === '404') return {
    "success": "False"
  }

  return {
    "success": "True",
    "joke": json.joke
  }
}
