import * as React from 'react';
import {connect} from 'react-redux'
import {
  BrowserRouter,
  Route,
  Switch,
  withRouter,
} from 'react-router-dom'

import Paper from 'material-ui/Paper'
import Header from './Header';


interface IOwnProps {
};
interface IConnProps {
};
interface IConnDispatches {
};
interface IOwnState {
};

function mapStateToProps(state) {
  return {
  };
};
function mapDispatchesToProps(dispatch) {
  return {
  }
};

class SnackBar extends React.Component< IOwnProps & IConnDispatches & IConnProps, IOwnState> {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
      <Paper elevation={2}>
        <Header/>
        </Paper>
      </div>
    );
  }
}
export default connect(mapStateToProps, mapDispatchesToProps) (SnackBar);
