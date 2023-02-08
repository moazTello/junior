import axios from "axios";

const options = {
  method: 'GET',
  url: 'https://trueway-directions2.p.rapidapi.com/FindDrivingRoute',
  params: {
    stops: '40.629041,-74.025606;40.630099,-73.993521;40.644895,-74.013818;40.627177,-73.980853'
  },
  headers: {
    'X-RapidAPI-Key': '54cf2a0f3emshc5232eb1fa6092cp17ab84jsn6c6a3d7e103b',
    'X-RapidAPI-Host': 'trueway-directions2.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});