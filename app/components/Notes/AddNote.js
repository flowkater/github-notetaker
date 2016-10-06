import React from 'react';

class AddNote extends React.Component {
  setRef(ref){
    this.note = ref;
  }
  handleSubmit(){
    var newNote = this.note.value;
    this.note.value = '';
    this.props.addNote(newNote)
  }
  render() {
    return (
      <div className="input-group">
        <input type="text" className="form-control" placeholder="Add New Note" ref={(ref) => this.setRef(ref)}/>
        <span className="input-group-btn">
          <button type="button" className="btn btn-default" onClick={this.handleSubmit.bind(this)}>Submit</button>
        </span>
      </div>
    );
  }
}

AddNote.propTypes = {
  username: React.PropTypes.string.isRequired,
  addNote: React.PropTypes.func.isRequired
}

export default AddNote;
