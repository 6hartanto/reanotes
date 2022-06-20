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
      searchString: '',
    };

    this.handleDelete = this.handleDelete.bind(this);
    this.handleArchive = this.handleArchive.bind(this);
    this.handleActivate = this.handleActivate.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
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

  handleSearch(e) {
    this.setState({ searchString: e.target.value });
    const notes = this.state.notes.filter((note) => {
      const title = note.title.toLowerCase();
      const body = note.body.toLowerCase();
      const searchString = this.state.searchString.toLowerCase();
      return title.includes(searchString) || body.includes(searchString);
    });
    this.setState({ notes });
  }

  render() {
    return (
      <div>
        <Navbar
          onSearch={this.handleSearch}
          searchString={this.state.searchString}
        />
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
