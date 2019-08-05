import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Icon } from '@material-ui/core';
import axios from 'axios'
import { addToCart } from '../actions/shop'
import validator from 'validator'
import Add from '@material-ui/icons/Add'
import Remove from '@material-ui/icons/Remove'

const useStyles = makeStyles(theme => ({
  root: {
    background: 'linear-gradient(45deg, rgb(254, 232, 107) 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
  },
  icon: {
    marginRight: theme.spacing(2),
  },
  cardGrid: {
    marginTop: theme.spacing(8),
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  button: {
    minWidth:45
  }
}));

export default props => {
  let num = 1;
  const [cards, setCards] = useState('')
  const [size, setSize] = useState('')
  const [error, setError] = useState(false)
  const classes = useStyles();

  useEffect(() => {
    axios.get("/api/products").then(resp => {
      setCards(resp.data)
    })
  }, [])

  function handleSubmit(card, size) {
    if (validator.isEmpty(size)) {
      setError(true)

    } else {
      setError(false)
      addToCart(card, size)
    }
  }

  return (
    <div>
    <div className="heading">Shop / Men / Shirts</div>
      <main>
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
          
            {Object.values(cards).map(card => (
              <Grid item key={card.id} xs={6} sm={4} md={4}>
       
                <Card className="card">
                  <CardMedia
                    className="cardMedia"
                    image={"/assets/" + card.sku + "_1.jpg"}
                    title={card.title}
                  />
                  <div className="cardContent">
                    <Typography>{card.title} </Typography>
                    <Typography> {card.currencyFormat}{(card.price).toFixed(2)}</Typography>
                    <div className="ship"> {card.isFreeShipping ? 'Free shipping' : ''} </div>
                  </div>
                  <label htmlFor={card.id}>
                    <Icon>add</Icon>show more 
                  </label>
                  <input id={card.id} type="checkbox"></input>
                  <div className="more">
                    <Typography> {card.installments >= 1 ? ('payment plan: $' + (card.price).toFixed(2) + ' of $' + (card.price / card.installments).toFixed(2)) : ''}</Typography>
                    <Typography className={error ? "error" : ''}>Sizes available: </Typography>
                  <Typography>
                    {card.availableSizes.map(size => <Button className="size" variant="outlined" onClick={e => setSize(size)} value={size} size="small">{size}</Button>)}
                  </Typography>
                  </div>
                  <CardContent className="cardActions">
                    <Button style={{minWidth: 30}} onClick={e => handleSubmit(card, size)} className="add" variant="outlined" size="small">
                      <Icon style={{ fontSize: 16 }}>add_circle</Icon>
                      <Typography>add to cart</Typography>
                    </Button>
                  </CardContent>
                  
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
   </div>
  );
}
