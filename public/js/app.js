console.log('Client side js file is loaded!');

fetch('http://localhost:3000/weather?address=boston').then(response => {
  response.json().then(data => {
    if (data.error) {
      console.log(data.error);
    } else {
      console.log(data.location);
      console.log(data.forecast);
    }
  });
});

// const fetchWeather = async () => {
//   const response = await fetch('http://localhost:3000/weather?address=boston');

//   const data = await response.json();
//   if (data.error) {
//     console.log(data.error);
//   } else {
//     console.log(data.location);
//     console.log(data.forecast);
//   }
// };

// fetchWeather();
