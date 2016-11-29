var React = require('react');

var WeatherMessage = ({temp, location})=>{
  
  return (
      <h2>It is {temp} degree in {location} city.</h2>
  );
};
module.exports = WeatherMessage
