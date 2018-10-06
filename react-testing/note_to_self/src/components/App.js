import React, { Component } from 'react';
import '../App.css';
import { Form, FormControl, Button } from 'react-bootstrap';
import { bake_cookie, read_cookie, delete_cookie } from 'sfcookies';
import Note from './Note';

const NOTES_KEY = 'NOTES';
class App extends Component {
  constructor() {
    super();
    this.state = {
      text: '',
      notes: []
    };
  }
  componentDidMount() {
    this.setState({ notes: read_cookie(NOTES_KEY) });
  }
  saveNote() {
    const { notes, text } = this.state;
    notes.push({ text });
    this.setState({ notes });
    bake_cookie(NOTES_KEY, this.state.notes);
  }
  clearNotes() {
    delete_cookie(NOTES_KEY);
    this.setState({ notes: [] });
  }

  render() {
    return (
      <div className="App">
        <h2>Note To Self</h2>
        <Form>
          <FormControl onChange={event => this.setState({ text: event.target.value })} />
          <Button onClick={() => this.saveNote()}>Add</Button>
          {
            this.state.notes.map((note, index) => {
              return (
                <Note key={index} note={note} />
              )
            })
          }
          <hr />
          <Button className = 'btn btn-primary' onClick={() => this.clearNotes()}>clear Notes</Button>
        </Form>
      </div>
    );
  }
}

export default App;
