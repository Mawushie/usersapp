import {createStore , compose, applyMiddleware} from 'redux'
import usersReducer from '../reducers/usersReducer'
import { getFirebase, reactReduxFirebase } from 'react-redux-firebase'
import { getFirestore, reduxFirestore } from 'redux-firestore'
import firebase from '../firebase/config'
import thunk from 'redux-thunk'

export const store = createStore(usersReducer, compose(
    applyMiddleware(thunk.withExtraArgument({getFirebase,getFirestore})),
    reactReduxFirebase(firebase),
    reduxFirestore(firebase)
));

//applyMiddleware is used when you want to build packages on top of the normal
//redux react flow