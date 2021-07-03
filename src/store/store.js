import {createStore , compose, applyMiddleware , combineReducers} from 'redux'
import usersReducer from '../reducers/usersReducer'
import { getFirebase, reactReduxFirebase , firebaseReducer } from 'react-redux-firebase'
import { getFirestore, reduxFirestore } from 'redux-firestore'
import firebase from '../firebase/config'
import thunk from 'redux-thunk'

const allReducers = combineReducers({
    usersState : usersReducer,
    firebaseState : firebaseReducer
})

export const store = createStore(allReducers, compose(
    applyMiddleware(thunk.withExtraArgument({getFirebase,getFirestore})),
    reactReduxFirebase(firebase),
    reduxFirestore(firebase)
));

//applyMiddleware is used when you want to build packages on top of the normal
//redux react flow (the reason we doingthat for thunk because it is sort of interrupt the normal
//flow)