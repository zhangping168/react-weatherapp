var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');
var ErrorModal = require('ErrorModal');

var Weather = React.createClass({
  getInitialState: function(){
    return{
      isLoading: false
    };
  },
  componentDidMount: function(){
    var location = this.props.location.query.location;

    if(location && location.length > 0){
      this.searchLocationHandler(location);
      window.location.hash='#/';
    }
  },
  componentWillReceiveProps: function(newProps){
    var location = newProps.location.query.location;

    if(location && location.length > 0){
      this.searchLocationHandler(location);
      window.location.hash='#/';
    }
  },

  searchLocationHandler: function(location){
    var that = this;
    this.setState({
      isLoading:true,
      errorMessage:undefined,
      location:undefined,
      temp:undefined
    });

    openWeatherMap.getTemp(location).then(function(temp){

      that.setState({
        location:location,
        temp:temp,
        isLoading:false
      });

    },function(e){
      that.setState({
        isLoading:false,
        errorMessage:e.message
      });

    });

  },
  render: function(){
    var {temp, location,isLoading,errorMessage} = this.state;
    function renderMessage(){

      if(isLoading){
        return <h2 className="text-center">Fetching the weather...</h2>;
      }else if(temp && location){
        return <WeatherMessage temp={temp} location={location}/>;
      }
    };
    function renderError(){
      if(typeof errorMessage === 'string'){
        return(
          <ErrorModal message={errorMessage} />
        )
      }
    };
    return (
        <div>
          <h1 className="text-center page-title">Get Weather</h1>
          <WeatherForm searchLocation = {this.searchLocationHandler}/>
          <p></p>
          {renderMessage()}
          {renderError()}
        </div>
    );
  }
});

module.exports = Weather
