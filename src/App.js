import React, { useEffect } from 'react';
import { getInitialData } from './utils/index';
import NoteList from './components/NoteList';

function App() {
  // const notes = getInitialData();
  const [notes, setNotes] = React.useState(getInitialData());

  useEffect(() => {
    setNotes(getInitialData());
  }, []);
  return (
    <div>
      <NoteList notes={notes} />
    </div>
  );
}

export default App;
