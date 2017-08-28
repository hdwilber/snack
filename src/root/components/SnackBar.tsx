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

import {userLogin, userLogout} from '../../actions/user'

import DialogItemCreate from './partials/DialogItemCreate';
import DialogLogin from './partials/DialogLogin';


interface IOwnProps {
};
interface IConnProps {
  user: any;
};
interface IConnDispatches {
  userLogin: (string)=>void;
  userLogout: () => void;
};
interface IOwnState {
  viewDialogItemCreate: boolean;
  viewDialogLogin: boolean;
};

function mapStateToProps(state) {
  return {
    user: state.user
  };
};
function mapDispatchesToProps(dispatch) {
  return {
    userLogin: (p: string) => dispatch(
      userLogin(p)),
    userLogout: () => dispatch(
      userLogout()
      )
  }
};

class SnackBar extends React.Component< IOwnProps & IConnDispatches & IConnProps, IOwnState> {
  constructor(props) {
    super(props)
    this.state = { 
      viewDialogItemCreate: false,
      viewDialogLogin: false 
    };
  }

  handleDialogItemCreateClose = value => {
    this.setState({ viewDialogItemCreate: false });
    console.log(value);
  }
  handleDialogLoginClose = value => {
    this.setState({viewDialogLogin: false});
    this.props.userLogin(value);
  }

  handleLogout = () => {
    this.props.userLogout();
  }
  handleLogin = () => {
    this.setState({
      viewDialogLogin: true
    })
  }

  handleItemCreate = () => {
    this.setState({viewDialogItemCreate: true})
  }

  render() {
    return (
      <div>
      <Paper elevation={2}>
        <Header 
          onItemCreate={this.handleItemCreate}
          onLogout={this.handleLogout}
          onLogin={this.handleLogin}
          user={this.props.user}
        />
        <DialogItemCreate 
          open={this.state.viewDialogItemCreate}
          onRequestClose={this.handleDialogItemCreateClose}
          userLogin={this.handleLogin}
          />
        <DialogLogin
          open={this.state.viewDialogLogin}
          onRequestClose={this.handleDialogLoginClose}
          />
        </Paper>
      </div>
    );
  }
}
export default connect(mapStateToProps, mapDispatchesToProps) (SnackBar);
