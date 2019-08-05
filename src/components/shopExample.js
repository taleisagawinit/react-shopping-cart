import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
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
}));

export default props => {
  const [cards, setCards] = useState('')
  const [showMore, setShowMore] = useState(false)
  const [item, setItem] = useState({}
  )
  const [error, setError] = useState(false)
  const classes = useStyles();

  useEffect(() => {
    axios.get("/api/products").then(resp => {
      setCards(resp.data)
    })
    
    
  }, [])

  function handleSubmit(item) {
    setItem(item)
    if (validator.isEmpty(size)) {
      setError(true)

    } else {
      setError(false)
      addToCart(item, size)
    }

  }

  
  return (
    <div>
      <main>
        <Container className={classes.cardGrid} maxWidth="lg">
          <Grid container spacing={6}>
            {Object.values(cards).map(card => (
              <Grid item key={card.id} xs={6} sm={4} md={3}>
                <Card className="card">
                  <CardMedia
                    className="cardMedia"
                    image={"/assets/" + card.sku + "_1.jpg"}
                    title={card.title}
                  />
                  <div className="cardContent">
                    <Typography>{card.title} </Typography>
                    <Typography> {card.currencyFormat}{(card.price).toFixed(2)}</Typography>
                    <p className="ship"> {card.isFreeShipping ? 'Free shipping' : ''} </p>
                  <Typography> {card.installments >= 1 ? "Payment plans available" : ""}</Typography>
                  <Typography className={error ? "error" : ''}>Choose a size: {size}</Typography>
                  <Typography>
                    {card.availableSizes.map(size => <Button variant="outlined" onClick={e => setSize(size)} size="small">{size}</Button>)}
                  </Typography>
                    <Button  onClick={e => setShowMore(!showMore)} variant="text">see more</Button>
                  </div>
                  <div className={showMore ? "more showMore" : "more"}>
                    <Typography> payment plan: </Typography>
                    <Typography> description: </Typography>
                    <Typography> style: </Typography>

                  </div>
                  <CardContent className="cardActions">
                    <Button onClick={e => handleSubmit(card.title)} className="add" variant="outlined" size="small">
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


