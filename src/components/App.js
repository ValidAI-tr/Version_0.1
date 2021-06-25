import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
    };
  }

  componentDidMount() {
    console.log('App Has Loaded...')
  }

  render() {
    return (
      <div>
        Hello World from ValidAI.tr!
      </div>
    );
  }
}

export default App;
