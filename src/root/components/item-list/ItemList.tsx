import * as React from 'react';
import {connect} from 'react-redux'
import {
  BrowserRouter,
  Route,
  Switch,
  withRouter,
} from 'react-router-dom'

import Grid from 'material-ui/Grid'

import ItemCard from './partials/ItemCard'

interface IOwnProps {
};
interface IConnProps {
};
interface IConnDispatches {
};
interface IOwnState {
  items: any;
};

function mapStateToProps(state) {
  return {
  };
};
function mapDispatchesToProps(dispatch) {
  return {
  }
};

class ItemList extends React.Component< IOwnProps & IConnDispatches & IConnProps, IOwnState> {
  constructor(props) {
    super(props)
    this.state = { 
      items: null
    };

  }
  componentDidMount () {
    //var itemsRef = firebase.database().ref('items');
    //itemsRef.once('value')
    //.then(snap => {
      //console.log(snap);
      //var nits= [];
      //snap.forEach((v, i) => {
        //let aux = v.val();
        //nits.push({...aux, id: v.key, images: (aux.images != null ? aux.images : [] ) });
        //this.setState({
          //items: nits
        //})
      //});
    //});
  }

  componentWillReceiveProps(nextprops) {
    console.log(nextprops);
  }
  renderImages() {
    if (this.state.items != null) {
      return this.state.items.map( (val, i) =>  <ItemCard data={val} key={i} /> );
    }
  }

  render() {
    return (
      <Grid container align="center" justify="center">
      <Grid item sm={8} md={6}>
      {this.renderImages()}
      </Grid>
      </Grid>

    );
  }
}
export default ItemList;
