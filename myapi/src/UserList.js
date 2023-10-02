const axios = require('axios');

// Make a GET request to the users endpoint
axios.get('https://jsonplaceholder.typicode.com/users')
  .then(response => {
    // Handle the response data here
    console.log(response.data);
  })
  .catch(error => {
    // Handle any errors
    console.error(error);
  });
