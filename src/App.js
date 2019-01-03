import React, { Component } from 'react';
import './App.scss';
import Editor from './Editor';
import Preview from './Preview';
import initialText from './initialText';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      myText: initialText
    };
    this.handleEdit = this.handleEdit.bind(this);
  }
  handleEdit(e) {
    this.setState({
      myText: e.target.value
    });
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">Markdown Previewer</header>
        <main id="main-section">
          <Editor myText={this.state.myText} onChange={this.handleEdit} />
          <Preview myText={this.state.myText} />
        </main>
      </div>
    );
  }
}

export default App;
