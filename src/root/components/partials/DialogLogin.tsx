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
import * as hello from 'hellojs'


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
  providers: any;
};

interface IConnProps {

};
interface IConnDispatches {
};
interface IOwnState {
  show: boolean;
};

function mapStateToProps(state) {
  return {
  };
};
function mapDispatchesToProps(dispatch) {
  return {
  }
};

class DialogLogin extends React.Component<IOwnProps & IConnDispatches & IConnProps, IOwnState> {
  constructor(props) {
    super(props)
    this.state = {
      show: false
    }
  }
  handleRequestClose = () => {
    this.props.onRequestClose(null);
  };

  handleListItemClick = value => {
    this.props.onRequestClose(value);
  };

  render() {
    const { providers,  onRequestClose, selectedValue, ...other } = this.props;
    return (
        <Dialog onRequestClose={this.handleRequestClose} {...other}>
        <DialogTitle>Log In</DialogTitle>
        <div>
          <List>
            {providers.map(provider =>
              <ListItem button onClick={() => this.handleListItemClick(provider.name)} key={provider.name}>
                <ListItemAvatar>
                  <Avatar className={styles.avatar}>
                    <PersonIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary={provider.name} />
              </ListItem>,
            )}
          </List>
        </div>
        {(this.state.show) ? (<iframe src="http://localhost:3100/auth/facebook" />):(<span/>)}
      </Dialog>
    );
  }
}
export default connect(mapStateToProps, mapDispatchesToProps) (DialogLogin);
