import * as React from 'react';
import {connect} from 'react-redux'
import {
  BrowserRouter,
  Route,
  Switch,
  withRouter,
} from 'react-router-dom'

import Button from 'material-ui/Button';
import FormGroup from 'material-ui/Form'
import Avatar from 'material-ui/Avatar';
import List, { ListItem, ListItemAvatar, ListItemText } from 'material-ui/List';
import Dialog, { DialogContent, DialogTitle, DialogActions } from 'material-ui/Dialog';

import Grid from 'material-ui/Grid';
import TextField from 'material-ui/TextField'

import AddIcon from 'material-ui-icons/Add'
import RemoveIcon from 'material-ui-icons/Remove';
import GridList, {GridListTile, GridListTileBar}from 'material-ui/GridList'
import IconButton from 'material-ui/IconButton'
import {FormLabel, FormControlLabel} from 'material-ui/Form'

//import {fileUpload} from './../../../actions/file-upload'
//import {itemCreate, itemSave} from './../../../actions/item'

import Typography from 'material-ui/Typography' 
import MenuIcon from 'material-ui-icons/Menu'


interface IOwnProps {
  onRequestClose: (string) => void;
  selectedValue: any;
  open: boolean;
};

interface IConnProps {
  isLoading: boolean;
  imagePath: string;
  uploadedFile: any;
  fileUrl: string;
  baseId: string;
};
interface IConnDispatches {
  test: () => void;
};
interface IOwnState {
  id: string;
  name: string;
  description: string;
  quantity: number;
  autoservice: boolean;
  timeToWait: number;
  images: Array<string>;
};

function mapStateToProps(state) {
  return {
    isLoading: true,
    imagePath: '',
    uploadedFile: null,
    fileUrl: '',
    baseId: '/',
  };
};
function mapDispatchesToProps(dispatch) {
  return {
    test : () => console.log('PUTAMADRE')
  }
};

class DialogItemCreate extends React.Component<IOwnProps & IConnDispatches & IConnProps, IOwnState> {
  fileInput: any;
  constructor(props) {
    super(props)
    this.state = ({
      id: '',
      name: '',
      description: '',
      quantity: 1,
      autoservice: true,
      timeToWait: 0,
      images: new Array()    
    });
  }
  handleRequestDiscard= (e) => {
    console.log("discard")
    console.log(e);
    this.props.onRequestClose('discard')
  };
  handleRequestSave = (e) => {
    console.log("save")
    console.log(e);
    this.props.onRequestClose('save')
  };

  onChangeHandler = (e) => {
    var aux = e.target.value;
    switch(e.target.name) {
      case 'quantity': 
        this.setState({quantity: parseInt(aux)})
      break;
      case 'name': 
        this.setState({name: aux})
      break;
    }
  }

  onChangeFIHandler = (e) => {
  }

  appendFile = (e)=> {
    var event = new MouseEvent('click', {
      'view': window,
      'bubbles': true,
      'cancelable': true
    });
    this.fileInput.dispatchEvent(event);
  }
  handleRequestClose = () => {
    return false;
  }

  render() {
    const { open, onRequestClose,  ...other } = this.props;
    //console.log(other);
    return (
      <Dialog 
        open={open} 
        onRequestClose={this.handleRequestDiscard}
        ignoreBackdropClick={true}
      >
        <DialogTitle>
          Create a new Item 
        </DialogTitle>
        <DialogContent>
          <TextField
            name="name"
            label="Insert a name"
            value={this.state.name}
            onChange={this.onChangeHandler}
            type="text"
            fullWidth
           />
          <FormLabel> 
            Quantity: 
          </FormLabel>
          <input style={{flexGrow: 1}} name="quantity" type="range" min="1" max="50" step="1" onChange={this.onChangeHandler} />
          <FormLabel>
          {this.state.quantity}
          </FormLabel>

        <input style={{ opacity: 0 }} id="file" type="file" onChange={this.onChangeFIHandler} ref={(input) => {this.fileInput = input;}}
        />
          <FormLabel> 
          Photos:
          </FormLabel>
        <Button style={{float: 'right'}} fab color="primary" aria-label="add"
        onClick={this.appendFile}>
          <AddIcon />
        </Button>

        <GridList cellHeight={160} cols={1}>
        {this.state.images.map((val, i) => 
           <GridListTile key={i} col={1}>
           <img src={val} />
            <GridListTileBar
              title={i}
              titlePosition="bottom"
              actionIcon={
                <IconButton>
                  <RemoveIcon color="white" />
                </IconButton>
              }
              actionPosition="right"
            />

           </GridListTile>

          )}

        </GridList>

        </DialogContent>

        <DialogActions>
          <Button onClick={this.handleRequestDiscard} color="primary">
            Discard
          </Button>
          <Button raised onClick={this.handleRequestSave} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}
export default connect(mapStateToProps, mapDispatchesToProps)(DialogItemCreate);
