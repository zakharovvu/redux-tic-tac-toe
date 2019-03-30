import React from "react"
import { createStore } from 'redux'
import Squares from "./Squares"
import { Provider } from "react-redux";

const App = () => {
    return (
        <Provider store={store}>
            <Squares />
        </Provider>
    )
}
const squares = { square: Array(9).fill(null), count: 0, win: false};

const reducerStore = (state = squares, action) => {
    if (action.type === 'TORN') {
        let newState = {...state};
        newState.square[action.index] = newState.count % 2 ? 'O' : 'X' ;
        newState.count++;
        newState.win = processingOfGold(newState.square);
        return newState;
    }
    if (action.type === 'RESET') {
        let newState = {...state};
        newState.square = Array(9).fill(null);
        newState.count = 0;
        newState.win = false;
        return newState;
    }
    return state;
}
const store = createStore(reducerStore);

function processingOfGold(arr) {
    const variants = ['012', '036', '048', '147', '246', '258', '345', '678', ];
    let win = 0;
    variants.forEach(el => {
      let [a, b, c] = [...el]
      if (arr[a] !== null && arr[a] === arr[b] && arr[b] === arr[c]) {  
        win++;
      }
    });
    return win > 0 ? true : false;
  }

store.subscribe(() => {
    console.log('state: ', store.getState())
})

export default App