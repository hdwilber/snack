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


const styles = {
  avatar: {
    background: blue[100],
    color: blue[600],
  },
};
interface IOwnProps {
  classes: any;
  onRequestClose: (string) => void;
  selectedValue: any;
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

const providers = ['google.com', 'facebook.com'];
class DialogLogin extends React.Component<IOwnProps & IConnDispatches & IConnProps, IOwnState> {
  constructor(props) {
    super(props)
  }
  handleRequestClose = () => {
    this.props.onRequestClose(this.props.selectedValue);
  };

  handleListItemClick = value => {
    this.props.onRequestClose(value);
  };

  render() {
    const { onRequestClose, selectedValue, ...other } = this.props;
    return (
        <Dialog onRequestClose={this.handleRequestClose} {...other}>
        <DialogTitle>Log In</DialogTitle>
        <div>
          <List>
            {providers.map(provider =>
              <ListItem button onClick={() => this.handleListItemClick(provider)} key={provider}>
                <ListItemAvatar>
                  <Avatar className={styles.avatar}>
                    <PersonIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary={provider} />
              </ListItem>,
            )}
          </List>
        </div>
      </Dialog>
    );
  }
}
export default connect(mapStateToProps, mapDispatchesToProps) (DialogLogin);
