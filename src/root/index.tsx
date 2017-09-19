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
import ItemList from './components/item-list/ItemList'

interface IOwnProps {
};

interface IConnProps {
  user: any;
};

interface IConnDispatches {
};
interface IOwnState {
};

function mapStateToProps(state) {
  return {
    session: state.session
  };
};
function mapDispatchesToProps(dispatch) {
  return {
  }
};

class App extends React.Component<IOwnProps & IConnProps & IConnDispatches, IOwnState> { 
  constructor(props){
    super(props);
    this.state = {
      name: 'Wilber'
    }
  }
  render() {
    return (
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={SnackBar} />
            <Route exact path="/list" render={()=> (<SnackBar> <ItemList /> </SnackBar>) } />
          </Switch>
        </BrowserRouter>
    );
  }
}
export default connect(mapStateToProps, mapDispatchesToProps) (App);

