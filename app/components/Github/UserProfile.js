var React = require('react');
var PropTypes = React.PropTypes;

var UserProfile = React.createClass({
  propTypes: {
    username: PropTypes.string.isRequired,
    bio: PropTypes.object.isRequired
  },
  render: function(){
    return(
      <div>
        <p> USER PROFILE! </p>
        <p> Username: {this.props.username} </p>
        <p> Bio: {this.props.bio.name} </p>
      </div>
    );
  }
});

module.exports = UserProfile;
