import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { cashReducer } from './cashReducer'
import { cusomerReducer } from './customerReducer'

const rootReducer = combineReducers({
  cash: cashReducer,
  customers: cusomerReducer,
})

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
)
