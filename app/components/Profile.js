let React = require('react');
let Router = require('react-router');
let Repos = require('./Github/Repos');
let UserProfile = require('./Github/UserProfile');
let Notes = require('./Notes/Notes');


let Profile = React.createClass({
  getInitialState: function() {
    return{
      notes: [1,2,3],
      bio: {
        name: 'Flowkater'
      },
      repos: ['a','b','c']
    }
  },

  render: function() {
    return (
      <div className="row">
        <div className="col-md-4">
          <UserProfile username={this.props.params.username} bio={this.state.bio} />
        </div>
        <div className="col-md-4">
          <Repos repos={this.state.repos} />
        </div>
        <div className="col-md-4">
          <Notes repos={this.state.notes} />
        </div>
      </div>
    );
  }
});

module.exports = Profile;
