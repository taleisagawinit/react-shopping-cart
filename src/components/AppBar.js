import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Icon } from '@material-ui/core';
import Filter from './Filter'
import Cart from './Cart'
import IconButton from '@material-ui/core/IconButton';



export default props => {
  const [toggleFilter, setToggleFilter] = useState(false)
  const [toggleCart, setToggleCart] = useState(false)

  return (
    <div>
      <AppBar position="fixed" >
        <Toolbar className="nav">
          <div>
            <Typography variant="h6" color="inherit" noWrap>
              Shop
            </Typography>  
          </div>
          <Button variant="contained" className={toggleCart ?  "focus" : ""} onClick={e => setToggleCart(!toggleCart)}>
          <Icon>shopping_cart</Icon> 
          </Button>
        </Toolbar>
        <div className={toggleFilter ? " show appBarContent" : "appBarContent"}>
          <Filter/>
        </div>
        <div className={toggleCart ? " show appBarContent" : "appBarContent"}> 
          <Cart />
        </div>
      </AppBar>
      
  </div>
  )
}
