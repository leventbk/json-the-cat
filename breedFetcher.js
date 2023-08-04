const request = require('request');

const fetchBreedDescription = (breed, callback) => {
  const input = `https://api.thecatapi.com/v1/breeds/search?q=${breed}`;

  request(input, (error, response, body) => {
    const parsed = JSON.parse(body);
    if (error) {
      callback(error, null);
      //return callback(`Breed "${breedName}" not found, please try again`, null);
    }

    if (parsed[0]) {
      callback(null, parsed[0].description);
      //callback(null, parsed[0].name)
    }
  });
};

module.exports = fetchBreedDescription;