/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { getInitialData } from './utils/index';
import Navbar from './components/layouts/Navbar';
import NoteInput from './components/NoteInput';
import NoteList from './components/NoteList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getInitialData(),
    };

    this.handleDelete = this.handleDelete.bind(this);
    this.handleArchive = this.handleArchive.bind(this);
    this.handleActivate = this.handleActivate.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
  }

  handleDelete(id) {
    const notes = this.state.notes.filter((note) => note.id !== id);
    this.setState({ notes });
  }

  handleAdd({ title, body }) {
    this.setState((prevState) => ({
      notes: [...prevState.notes, { id: Date.now(), title, body }],
    }));
  }

  handleArchive(id) {
    const notes = this.state.notes.map((note) => {
      if (note.id === id) {
        return { ...note, archived: true };
      }
      return note;
    });
    this.setState({ notes });
  }

  handleActivate(id) {
    const notes = this.state.notes.map((note) => {
      if (note.id === id) {
        return { ...note, archived: false };
      }
      return note;
    });
    this.setState({ notes });
  }

  render() {
    return (
      <div>
        <Navbar />
        <NoteInput onSubmit={this.handleAdd} />
        <NoteList
          notes={this.state.notes}
          onDelete={this.handleDelete}
          onArchive={this.handleArchive}
          onActivate={this.handleActivate}
        />
      </div>
    );
  }
}

export default App;
