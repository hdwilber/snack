import * as React from 'react';
import {connect} from 'react-redux'
import {
  BrowserRouter,
  Route,
  Switch,
  withRouter,
} from 'react-router-dom'

import Button from 'material-ui/Button';
import Avatar from 'material-ui/Avatar';
import List, { ListItem, ListItemAvatar, ListItemText } from 'material-ui/List';
import Dialog, { DialogTitle } from 'material-ui/Dialog';
import Typography from 'material-ui/Typography';

import PersonIcon from 'material-ui-icons/Person';
import AddIcon from 'material-ui-icons/Add';
import blue from 'material-ui/colors/blue';


interface IOwnProps {
  onRequestClose: (string) => void;
  open: boolean;
};
interface IOwnState {
  selectedValue: any;
};

const providers = ['google.com', 'facebook.com'];
class DialogLogin extends React.Component<IOwnProps, IOwnState> {
  constructor(props) {
    super(props)
    this.state = {selectedValue: 'google.com'};
  }
  handleRequestClose = () => {
    this.props.onRequestClose(null);
  };

  handleListItemClick = value => {
    this.props.onRequestClose(value);
  };

  render() {
    const { onRequestClose, ...other } = this.props;
    return (
        <Dialog onRequestClose={this.handleRequestClose} {...other}>
        <DialogTitle>Log In</DialogTitle>
        <div>
          <List>
            {providers.map(provider =>
              <ListItem button onClick={() => this.handleListItemClick(provider)} key={provider}>
                <ListItemAvatar>
                  <Avatar >
                    <PersonIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary={provider} />
              </ListItem>
            )}
          </List>
        </div>
      </Dialog>
    );
  }
}
export default DialogLogin;
