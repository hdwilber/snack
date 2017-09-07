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

import {PROVIDERS, userLogin, userLogout} from '../../actions/user'

import DialogItemCreate from './partials/DialogItemCreate';
import DialogLogin from './partials/DialogLogin';
import {citemCreate, citemSave, citemRemove, citemUpload} from '../../actions/item';
import ItemList from './item-list/ItemList'

import RestService from '../../services';


interface IOwnProps {
  children: any;
};
interface IConnProps {
  user: any;
  item: any;
};
interface IConnDispatches {
  userLogin: (string)=>void;
  userLogout: () => void;
  createItem: () =>void;
  saveItem: (any) => void;
  removeItem: () => void;
  uploadFilesToItem: (FileList) => void;
};
interface IOwnState {
  viewDialogItemCreate: boolean;
  viewDialogLogin: boolean;
};

function mapStateToProps(state) {
  return {
    user: state.user,
    item: state.currentItem

  };
};
function mapDispatchesToProps(dispatch) {
  return {
    userLogin: (p: string) => dispatch(
      userLogin(p)),
    userLogout: () => dispatch(
      userLogout()
      ),
    createItem: () => dispatch(citemCreate()),
    saveItem: (data) => dispatch(citemSave(data)),
    removeItem: () => dispatch(citemRemove()),
    uploadFilesToItem: (d: FileList) => dispatch(citemUpload(d))
  }
};

class SnackBar extends React.Component< IOwnProps & IConnDispatches & IConnProps, IOwnState> {
  constructor(props) {
    super(props)
    this.state = { 
      viewDialogItemCreate: false,
      viewDialogLogin: false 
    };
    console.log("Constructor de snackBar")
    console.log(props);
    console.log(RestService)
  }

  componentWillReceiveProps(nextprops) {
    console.log(nextprops);
  }
  handleDialogItemCreateClose = (value, data) => {
    this.setState({ viewDialogItemCreate: false });
    if (this.props.item != null && value === 'save') {
      this.props.saveItem(data);
      console.log('Saving...')
    }  else {
      console.log('discard')
      this.props.removeItem();
    }
  }
  handleDialogItemCreateUpload = (files: FileList) => {
    this.props.uploadFilesToItem(files);
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
    if (this.props.user != null) {
      this.props.createItem();
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
          user={this.props.user}
        />
          <DialogItemCreate 
            open={this.state.viewDialogItemCreate}
            onRequestClose={this.handleDialogItemCreateClose}
            onFilesUpload={this.handleDialogItemCreateUpload}
            user={this.props.user}
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
