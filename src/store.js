import { createStore } from 'redux'

import shopReducer from './reducers/shop.reducer'

const store = createStore(shopReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store