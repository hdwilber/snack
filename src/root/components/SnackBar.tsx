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

import {
  PROVIDERS, 
  sessionStart, 
  sessionRestore,
  sessionEnd
} from '../../actions/session';

import {
  itemCreate,
  itemRemove, 
  itemUpdate, 
  itemRetrieve,
  itemRetrieveAll,
} from '../../actions/item';

import DialogItemCreate from './partials/DialogItemCreate';
import DialogLogin from './partials/DialogLogin';
//import {citemCreate, citemSave, citemRemove, citemUpload} from '../../actions/item';
import ItemList from './item-list/ItemList'

import RestService from '../../services';


interface IOwnProps {
  children: any;
};
interface IConnProps {
  session: any;
  item: any;
};
interface IConnDispatches {
  sessionStart : (string) => void,
  sessionRestore : () => void,
  sessionEnd: () => void,
  itemCreate: () => void,
  itemUpdate: (data) => void,
  itemRemove: (id) => void,
  itemRetrieveAll: () => void,
  //createItem: () =>void;
  //saveItem: (any) => void;
  //removeItem: () => void;
  //uploadFilesToItem: (FileList) => void;
};
interface IOwnState {
  viewDialogItemCreate: boolean;
  viewDialogLogin: boolean;
};

function mapStateToProps(state) {
  return {
    session: state.session,
    item: state.currentItem

  };
};
function mapDispatchesToProps(dispatch) {
  return {
    sessionStart: (p: string) => dispatch(
      sessionStart(p)),
    sessionRestore: () => dispatch( sessionRestore() ),
    sessionEnd: () => dispatch (sessionEnd()),
    itemCreate: () => dispatch(itemCreate()),
    itemUpdate: (data) => dispatch(itemUpdate(data)),
    itemDelete: (id) => dispatch(itemRemove(id)),
    itemRetrieveAll: () => dispatch(itemRetrieveAll()),


    //createItem: () => dispatch(citemCreate()),
    //saveItem: (data) => dispatch(citemSave(data)),
    //removeItem: () => dispatch(citemRemove()),
    //uploadFilesToItem: (d: FileList) => dispatch(citemUpload(d))
  }
};

class SnackBar extends React.Component< IOwnProps & IConnDispatches & IConnProps, IOwnState> {
  constructor(props) {
    super(props)
    this.state = { 
      viewDialogItemCreate: false,
      viewDialogLogin: false 
    };
    props.sessionRestore();
  }

  componentWillReceiveProps(nextprops) {
    console.log(nextprops);
  }
  handleDialogItemCreateClose = (value, data) => {
    this.setState({ viewDialogItemCreate: false });
    if (this.props.item != null && value === 'save') {
      //this.props.saveItem(data);
      console.log('Saving...')
    }  else {
      console.log('discard')
      //this.props.removeItem();
    }
  }
  handleDialogItemCreateUpload = (files: FileList) => {
    //this.props.uploadFilesToItem(files);
  }
  handleDialogLoginClose = value => {
    this.setState({viewDialogLogin: false});
    this.props.sessionStart(value);
  }

  handleLogout = () => {
    this.props.sessionEnd();
  }
  handleLogin = () => {
    this.setState({
      viewDialogLogin: true
    })
  }

  handleItemCreate = () => {
    if (this.props.session && !this.props.session.error ) {
      //this.props.itemCreate();
      this.props.itemRetrieveAll();
      this.setState({viewDialogItemCreate: true})
    }
  }

  render() {
    return (
      <div>
      <Paper elevation={2}>
        <Header 
          onItemCreate={this.handleItemCreate}
          onLogout={this.handleLogout}
          onLogin={this.handleLogin}
          session={this.props.session}
        />

        <DialogItemCreate 
          open={this.state.viewDialogItemCreate}
          onRequestClose={this.handleDialogItemCreateClose}
          onFilesUpload={this.handleDialogItemCreateUpload}
          session={this.props.session}
          item={this.props.item}
        />
        <DialogLogin
          open={this.state.viewDialogLogin}
          onRequestClose={this.handleDialogLoginClose}
          providers={PROVIDERS}
          />


        {this.props.children}
        </Paper>
      </div>
    );
  }
}
export default connect(mapStateToProps, mapDispatchesToProps) (SnackBar);
