import * as React from 'react';
import {SnackBar} from './components'
import {connect} from 'react-redux'
import {
  BrowserRouter,
  Route, 
  Switch,
  withRouter
} from 'react-router-dom';
import firebase from './../common/firebase'

import {setupUser} from './../actions/user'

interface IOwnProps {
};

interface IConnProps {
};
interface IConnDispatches {
  setupUser: () => void;
};
interface IOwnState {
};

function mapStateToProps(state) {
  return {
  };
};
function mapDispatchesToProps(dispatch) {
  return {
    setupUser: (user) => dispatch(setupUser(user))
  }
};

class App extends React.Component<IOwnProps & IConnProps & IConnDispatches, IOwnState> { 
  constructor(props){
    super(props);
    this.state = {
      name: 'Wilber'
    }
    firebase.auth().onAuthStateChanged(user=>{
      if (user != null) {
        props.setupUser(user);
        console.log('AuthState changed');
      }
    });
  }
  render() {
    return (
      <BrowserRouter>
      <Route path='/' component={SnackBar}/>
      </BrowserRouter>
    );
  }
}
export default connect(mapStateToProps, mapDispatchesToProps) (App);

