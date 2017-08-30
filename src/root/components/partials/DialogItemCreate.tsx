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
import Dialog, { DialogContent, DialogTitle, DialogActions } from 'material-ui/Dialog';

import Grid from 'material-ui/Grid';
import TextField from 'material-ui/TextField'

import AddIcon from 'material-ui-icons/Add'
import RemoveIcon from 'material-ui-icons/Remove';
import GridList, {GridListTile, GridListTileBar}from 'material-ui/GridList'
import IconButton from 'material-ui/IconButton'
import {FormGroup, FormLabel, FormControlLabel} from 'material-ui/Form'
import Checkbox from 'material-ui/Checkbox'

import {fileUpload} from './../../../actions/file'
//import {itemCreate, itemSave} from './../../../actions/item'

import Typography from 'material-ui/Typography' 
import MenuIcon from 'material-ui-icons/Menu'
import {Textarea} from 'material-ui/Input'


import {citemCreate, citemSave} from './../../../actions/item'


interface IOwnProps {
  onRequestClose: (string, any) => void;
  open: boolean;
  user: any;
  item: any;
};

interface IConnProps {
};
interface IConnDispatches {
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

class DialogItemCreate extends React.Component<IOwnProps & IConnDispatches & IConnProps, IOwnState> {
  fileInput: any;
  descInput: any;
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
    this.props.onRequestClose('discard', null);
  }
  handleRequestSave = (e) => {
    console.log("save")
    console.log(e);
    this.props.onRequestClose('save', {
      name: this.state.name,
      description: this.state.description,
      quantity: this.state.quantity,
      autoservice: this.state.autoservice,
      timeToWait: this.state.timeToWait,
      images: this.state.images
    });
  }
  componentWillReceiveProps(nextProps) {
  }

    //}
    //if (nextProps)
    //if (nextProps.fileUrl) {
      //let myimg = this.state.images.concat([nextProps.fileUrl])
      //this.setState({
        //images: myimg
      //})
    //}
  //}
  onChangeHandler = (e) => {
    var aux = e.target.value;
    switch(e.target.name) {
      case 'quantity': 
        this.setState({quantity: parseInt(aux)})
      break;
      case 'name': 
        this.setState({name: aux})
      break;
      case 'description': 
        this.setState({description:  aux})
      break;
    }
  }

  onChangeFIHandler = (e) => {
    console.log("Cambiaron los archivos");
    //this.props.uploadFile(this.props.baseId, e.target.files)
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
           <textarea style={{width: '100%'}}name="description" onChange={this.onChangeHandler} value={this.state.description}/>

           <FormGroup row>
           <FormGroup>
            <FormLabel> 
              Quantity: 
            </FormLabel>
            <input style={{flexGrow: 1}} name="quantity" type="range" min="1" max="50" step="1" onChange={this.onChangeHandler} />
            <FormLabel>
            {this.state.quantity}
            </FormLabel>
           </FormGroup>
           <FormGroup>

            <FormControlLabel
              control={
                <Checkbox
                  checked={this.state.autoservice}
                  onChange={() => {this.setState({autoservice: !this.state.autoservice})}}
                  value="autoservice"
                />
              }
              label="Autoservice?" 
            />
            </FormGroup>
          </FormGroup>

        <input style={{ opacity: 0 }} id="file" type="file" onChange={this.onChangeFIHandler} ref={(input) => {this.fileInput = input;}}
        />


        <FormGroup row={true} style={{justifyContent: 'space-between'}}>
          <FormLabel >
          Photos:
          </FormLabel>

          <Button fab color="primary" aria-label="add"
          onClick={this.appendFile}>
            <AddIcon />
          </Button>

        </FormGroup>

        <GridList cellHeight={160} cols={2}>
        {this.state.images.map((val, i) => 
           <GridListTile key={i} cols={2}>
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
export default DialogItemCreate;
