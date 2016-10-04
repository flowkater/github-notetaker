var React = require('react');
var PropTypes = React.PropTypes;

var Repos = React.createClass({
  propTypes: {
    username: PropTypes.string.isRequired,
    repos: PropTypes.array.isRequired
  },
  render: function(){
    return(
      <div>
        <p> REPOS </p>
        REPOS: {this.props.repos}
      </div>
    );
  }
});

module.exports = Repos;
