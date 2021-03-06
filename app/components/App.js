import uuid from 'node-uuid';
import React, {Component} from 'react';
import Notes from './Notes.js';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [
        {
          id: uuid.v4(),
          task: 'Learn Webpack'
        },
        {
          id: uuid.v4(),
          task: 'Learn React'
        },
        {
          id: uuid.v4(),
          task: 'Do Laundry'
        }
      ]
    };
  }
  render() {
    const notes = this.state.notes;
    return (
      <div>
        <button className="add-note" onClick={this.addNote}>+</button>
        <Notes notes={notes} onEdit={this.editNote} onDelete={this.deleteNote} />
      </div>
    );
  }
  addNote = () => {
    /* eslint no-invalid-this: 0 */
    this.setState({
      notes: [...this.state.notes, {
        id: uuid.v4(),
        task: 'New Task'
      }]
    });
  }
  editNote = (id, task) => {
    const notes = this.state.notes.map((note) => {
      if (note.id === id) {
        note.task = task;
      }
      return note;
    });
    this.setState({notes});
  }
  deleteNote = (id) => {
    this.setState({
      notes: this.state.notes.filter((note) => note.id !== id)
    });
  }
}
