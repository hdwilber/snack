import * as React from 'react';
import {connect} from 'react-redux'
import {
  Link,
  withRouter
} from 'react-router-dom'

import BottomNavigation, {BottomNavigationButton} from 'material-ui/BottomNavigation'
import Menu, { MenuItem } from 'material-ui/Menu';
import AppBar from 'material-ui/AppBar'
import IconButton from 'material-ui/IconButton';
import Typography from 'material-ui/Typography'
import Toolbar from 'material-ui/Toolbar'
import Button from 'material-ui/Button'
import {List, Divider, ListItem, ListItemIcon, ListItemText, ListSubheader} from  'material-ui'
import Avatar from 'material-ui/Avatar'
import { withStyles } from 'material-ui/styles'
import Drawer from 'material-ui/Drawer'

import MenuIcon from 'material-ui-icons/Menu';
import MoreVert from 'material-ui-icons/MoreVert'
import ShoppingCart from 'material-ui-icons/ShoppingCart'
import Face from 'material-ui-icons/Face'
import Delete from 'material-ui-icons/Delete'
import Mail from 'material-ui-icons/Mail'
import RecordVoiceOver from 'material-ui-icons/RecordVoiceOver'
import AddBoxIcon from 'material-ui-icons/AddBox'
import SettingsIcon from 'material-ui-icons/Settings'

interface IOwnProps {
  user: any;
  onItemCreate: ()=>void;
  onLogin: ()=> void;
  onLogout: () => void;
}
interface IOwnState {
  viewSideMenu: boolean;
}
interface IConnProps{
}
interface IConnDispatches{
}

function mapStateToProps(state) {
  return {
  };
}
function mapDispatchesToProps(dispatch) {
  return {
  };
}

class Header extends React.Component<IOwnProps & IConnProps & IConnDispatches, IOwnState> {
  constructor(props) {
    super(props);

    console.log(props);
    this.state = { viewSideMenu: false };
  }
  handleSideMenu(e) {
    this.setState ({
      viewSideMenu: true
    })
  }
  handleSideMenuClose(e) {
    this.setState({
      viewSideMenu: false
    })
  }

  handleLogout = () => {
    this.props.onLogout();
  }

  renderUserMenu() {
    var userMenu; 
    if (this.props.user != null) {
      userMenu = 
        <UserMenu user={this.props.user} onLogout={this.handleLogout}/>
    }
    else {
      userMenu = 
        <Button color="contrast" onClick={this.props.onLogin}>Login</Button>
    }
    return userMenu;
  }
  renderTopBar() {
    return (
      <AppBar position="static">
        <Toolbar>
          <IconButton color="contrast" aria-label="Menu"
          onClick={(e)=> {this.handleSideMenu(e)}}
          >
            <MenuIcon/>
          </IconButton>
          <Typography style={{flex: 1}} type="title" color='inherit' >
            <Link style={{color: "white"}} to="/">
              Snack
            </Link>
          </Typography>
          {
            (this.props.user != null) &&
            <IconButton color='contrast' aria-label="Create a new Item"
            onClick={this.props.onItemCreate}
            >
              <AddBoxIcon/>
            </IconButton>
          }

          <IconButton 
            color='contrast' aria-label="Buy"
            >
            <ShoppingCart/>
          </IconButton>
          <IconButton color='contrast' aria-label="Suggest">
            <RecordVoiceOver/>
          </IconButton>
          {this.renderUserMenu()}
        </Toolbar>
      </AppBar>
    );
  }
  renderSideMenu() {
    return ( 
      <Drawer 
        anchor="left"
        open={this.state.viewSideMenu}
        onRequestClose={(e) => {this.handleSideMenuClose(e)}}
        >
          <ListItem button>
            <ListItemIcon>
              <SettingsIcon />
            </ListItemIcon>
            <ListItemText primary="Settings" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <AddBoxIcon/>
            </ListItemIcon>
            <ListItemText primary="Create Item " />
          </ListItem>
      </Drawer>
    );
  }
  render() {
    return (
      <div >
        {this.renderTopBar()}
        {this.renderSideMenu()}
      </div>
    );
  }
}

interface _LoginState {
  open: boolean;
  anchorEl: any;
}
interface _LoginProps {
  user: any;
  onLogout: any;
}

class UserMenu extends React.Component<_LoginProps,_LoginState>  {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
      anchorEl: undefined
    }
    this.handleLogout.bind(this);
  }
  handleClick = (e) => {
    this.setState({ open: true, anchorEl: e.currentTarget});

  }
  handleRequestClose = (e) => {
    this.setState({ open: false });
  }
  handleLogout = () => {
    this.props.onLogout();
  }
  
  render() {
    return (
      <div>
        <IconButton
          aria-owns={this.state.open ? 'simple-menu' : null}
          aria-haspopup="true"
          onClick={this.handleClick}
          color="contrast"
        >
          <Avatar src={this.props.user.photoUrl} />
        </IconButton>
        <Menu
          id="simple-menu"
          anchorEl={this.state.anchorEl}
          open={this.state.open}
          onRequestClose={this.handleRequestClose}
        >
          <MenuItem onClick={this.handleRequestClose}>Profile</MenuItem>
          <MenuItem onClick={this.handleRequestClose}>My account</MenuItem>
          <MenuItem onClick={this.handleLogout}>Logout</MenuItem>
        </Menu>
      </div>
    )
  }
}
export default withRouter(Header)
