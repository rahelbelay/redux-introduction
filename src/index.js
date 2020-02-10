//console.log('it is workinng!!!')
// the bank - is state

// describe the ideal version of state
// {
//     amount: 100
// }
// // if we added 1,what state look like

// {
//     amount: 101
// }
// //the transaction slip- action

// {
//     type: 'INCREMENT'
// }

// {
//     type: 'DECREMENT'
// }


import {
    createStore
} from 'redux';
//teller -the reducter function
//reducers are always named for the stated for they manage
// they always  received the cureent state and teh action they are processing
function counter(state = { amount: 100 }, action) {
    console.table(action)
    const newState = { ...state };
    if (action.type === 'INCREMENT') {
        newState.amount = state.amount + 1;
    } else if (action.type === 'DECREMENT') {
        newState.amount = state.amount - 1
    } else {

    }

    //newState.amount = state.amount + 1
    return newState;
}
//they must return the new version of state


//you give it a reducer it gives you a "store"
const store = createStore(counter);
store.subscribe(() => {
    console.log(`the state is now`)
    console.table(store.getState())
})
store.dispatch({
    type: 'DECREMENT'
});
store.dispatch({
    type: 'INCREMENT'
});
store.dispatch({
    type: '🎃'
});


//push notification - 

// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
