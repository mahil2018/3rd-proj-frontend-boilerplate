const axios = require('axios');
axios({
  method: "The HTTP method (verb) we are going to use",
  url: "The url the server is going to receive.", 
  params: "URL parameters to be sent with the request" ,
})
.then(document => {
  res.render('/')
})
.catch(err => {
  console.log('Here we catch the error and display it', error)
})
const restCountriesApi = axios.create({
  baseURL: 'https://restcountries.eu/rest/v2/name/'
});

function getCountryInfo(theName) {
  restCountriesApi.get(theName)
  .then(responseFromAPI => {
      console.log('Response from API is: ', responseFromAPI.data);           
})
.catch(err => {
  console.log('Error is: ', err);
  })
}