import * as React from 'react';
import Card, { CardHeader, CardMedia, CardContent, CardActions } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';
import Avatar from 'material-ui/Avatar';


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
            <ul className={classes.gallery}>
            <li className={classes.galleryItem}>
            <img className={classes.galleryImage} src={this.props.data.images[0]}/>
            </li>
            </ul>
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

