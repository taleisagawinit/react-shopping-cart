import store from '../store'

export function remove(itemId) {
  store.dispatch({
    type: 'REMOVE_ITEM',
    payload: itemId
  })
}
 let id=0
export function addToCart(item, size) {
  store.dispatch({
    type: 'ADD_ITEM',
    payload: {
      title: item.title,
      sku: item.sku,
      size: size,
      quantity: item.quantity,
      price: item.price,
      id: item.id
    }
  })

}
