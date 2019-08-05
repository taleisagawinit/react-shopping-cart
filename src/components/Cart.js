import React from 'react';
import { useSelector } from 'react-redux'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Icon } from '@material-ui/core';
import {remove} from '../actions/shop'

const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
    display: 'flex',
    flexDirection: 'row'
  },
}));

export default props => {
  const classes = useStyles();
  const cart = useSelector(appState => appState.cart)
  const subtotal = Object.values(cart)

  let key = 0;
  function deleteItem(id) {
    remove(id)
  }

    
  return (
    <div>
    <Typography className="sub">
      subtotal: ${subtotal.length >= 1 ? (subtotal.map(item => item.price).reduce((a,b) => a+b)).toFixed(2) + ' USD' : '0.00 USD'}
    </Typography>
    <div>{subtotal.length >= 1 ?
    <Container className={classes.cardGrid} maxWidth="md">
      <Grid container spacing={4}>
        {Object.values(cart).map(item => (
          <Grid item key={key++}>
            <Card className="cartCard">
              <CardMedia
                className="cartMedia"
                image={"/assets/" + item.sku + "_1.jpg"}
                title={item.title}
              />
              
              <CardContent className="cartCardContent">
                <Icon onClick={ e => deleteItem(item.id)}>clear</Icon>
                <Typography> {item.title} </Typography>
                <Typography>{(item.price).toFixed(2)}</Typography>
                <Typography>Size: {item.size}</Typography>
                <Typography>Quantity: </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
    : 'add items to your cart!'}</div>
    
    </div>
  )

}
   
  
  
  
  

