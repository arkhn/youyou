import { createStore, combineReducers, applyMiddleware } from 'redux'
import { resource } from './reducers/resource';
import thunk from 'redux-thunk'

const rootReducer = combineReducers({ 
    resource
})

const initStore = () => {
    return createStore(rootReducer, applyMiddleware(thunk))
}

export type RootState = ReturnType<typeof rootReducer>

export default initStore;