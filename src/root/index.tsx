import * as React from 'react';
import {SnackBar} from './components'
import {connect} from 'react-redux'
import {
  BrowserRouter,
  Route, 
  Switch,
  withRouter,
  Redirect
} from 'react-router-dom';
import firebase from './../common/firebase'

import {setupUser} from './../actions/user'

interface IOwnProps {
};

interface IConnProps {
  user: any;
};
interface IConnDispatches {
  setupUser: () => void;
};
interface IOwnState {
};

function mapStateToProps(state) {
  return {
    user: state.user
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
  checkAuth (e) {
    console.log("Checking on Enter")
    console.log(e)
    return true;
  }
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path='/' component={SnackBar}/>
        </Switch>
      </BrowserRouter>
    );
  }
}
export default connect(mapStateToProps, mapDispatchesToProps) (App);

