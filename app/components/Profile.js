let React = require('react');
let Router = require('react-router');
let Repos = require('./Github/Repos');
let UserProfile = require('./Github/UserProfile');
let Notes = require('./Notes/Notes');
let ReactFireMixin = require('reactfire');
let Firebase = require('firebase');


let Profile = React.createClass({
  mixins: [ReactFireMixin],
  getInitialState: function() {
    return{
      notes: [],
      bio: {
        name: 'Tyler Mcginnis'
      },
      repos: ['a','b','c']
    }
  },

  componentDidMount: function(){
    this.ref = new Firebase('https://github-notetaker-1e509.firebaseio.com/');
    var childRef = this.ref.child(this.props.params.username);
    this.bindAsArray(childRef, 'notes');
  },

  componentWillMount: function() {
    // this.unbind('notes');
  },

  handleAddNote: function(newNote) {
    this.ref.child(this.props.params.username).child(this.state.notes.length).set(newNote);
  },

  render: function() {
    return (
      <div className="row">
        <div className="col-md-4">
          <UserProfile username={this.props.params.username} bio={this.state.bio} />
        </div>
        <div className="col-md-4">
          <Repos username={this.props.params.username} repos={this.state.repos} />
        </div>
        <div className="col-md-4">
          <Notes
            username={this.props.params.username}
            notes={this.state.notes}
            addNote={this.handleAddNote} />
        </div>
      </div>
    );
  }
});

module.exports = Profile;
