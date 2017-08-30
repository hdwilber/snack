import * as React from 'react';
import Card, { CardHeader, CardMedia, CardContent, CardActions } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';
import Avatar from 'material-ui/Avatar';

import GridList, {GridListTile, GridListTileBar}from 'material-ui/GridList'
import IconButton from 'material-ui/IconButton'

import AddIcon from 'material-ui-icons/Add'

interface IOwnProps {
  data: any;
  classes: any;
};
interface IOwnState {
};

const styles = theme => ({
  card: {
    maxWidth: 400,
  },
  media: {
    height: 194,
    backgroundPosition: 'center',
    backgroundSize: 'contain'
  },
  gallery: {
    listStyle: 'none',
    padding: 0,
  }, 
  galleryItem: {
    display: 'inline-block',
  },
  galleryImage: {
    width: '100%',
    maxWidth: '100%'
  }
});

class ItemCard extends React.Component <IOwnProps, IOwnState> {
  constructor(props) {
    super(props);
  }

  renderImages() {
    if (this.props.data.images != null) {
      return (
        <GridList cellHeight={160} cols={2} spacing={15}>
        {this.props.data.images.map((val, i) => {
          return (
           <GridListTile style={{hover: {marginBottom: '50px'}}} key={i} cols={(i==0)?2:1}>
             <img src={val} />
             <GridListTileBar
               title={i}
               titlePosition="bottom"
               actionIcon={
                 <IconButton>
                   <AddIcon color="white" />
                 </IconButton>
               }
               actionPosition="right"
             />

           </GridListTile>
          )
        })
        }
        </GridList>
        );
    }
  }


  render() {
    console.log(this.props.data);
    const classes = this.props.classes;
    return (
       <Card >
          <CardHeader
            avatar={
              <Avatar aria-label="Recipe" >
              {this.props.data.name[0]}
              </Avatar>
            }
            title={this.props.data.name}
            subheader="September 14, 2016"
          />
          {
          (this.props.data.images.length > 0) &&
            this.renderImages()
          }
          <CardContent>
            <Typography component="p">
            {this.props.data.description }
            </Typography>
          </CardContent>
      </Card>
    )
  }
}

export default withStyles(styles)(ItemCard);

