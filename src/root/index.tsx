import * as React from 'react';
import { SnackAppBar } from './components';

class App extends React.Component<{}, {}> {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div id="body">
        <SnackAppBar />
      </div>
    );
  }
}

export default App;
