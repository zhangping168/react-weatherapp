var React = require('react');

var WeatherMessage = React.createClass({
  render: function(){
    var {temp, location} = this.props;
    return (
        <h2>It is {temp} degree in {location} city.</h2>
    );
  }
});

module.exports = WeatherMessage
