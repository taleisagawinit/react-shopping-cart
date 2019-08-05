import React from 'react'
import 'normalize.css/normalize.css'
import '../styles/App.css'
import { Provider } from 'react-redux'
import store from '../store'
import ShopItems from './ShopItems'
import AppBar from './AppBar'
import Footer from './Footer'
import Example from './example.js'

export default props => {
  return (
    <Provider store={store}>
      <div>
        <AppBar />
        <ShopItems />
        <Footer />
        
      </div>
    </Provider>
  )
}