var React = require('react');

var WeatherForm = React.createClass({
  onFormSubmit:function(e){
    e.preventDefault();
    var location = this.refs.location.value;
    if(location.length>0){
      this.refs.location.value = '';
      this.props.searchLocation(location);
    }
  },
  render: function(){
    return (
        <div>
          <form onSubmit={this.onFormSubmit}>
            <input type="search" ref="location" placeholder="Search weather by city"/>
            <p></p>
            <button className="button hollow expanded">Get Weather</button>
          </form>
        </div>
    );
  }
});

module.exports = WeatherForm
