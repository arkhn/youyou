import { createStore, combineReducers, applyMiddleware } from 'redux'
import { resource, ResourceState } from './reducers/resource';
import thunk from 'redux-thunk'

export type AppState = {
    resource: ResourceState
}

const rootReducer = combineReducers({ 
    resource
})

const initStore = () => {
    return createStore(rootReducer, applyMiddleware(thunk))
}

export type RootState = ReturnType<typeof rootReducer>

export default initStore;