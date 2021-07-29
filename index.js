// importando o redux
const redux = require("redux");
// redux
const createStore = redux.createStore;
// criando o combinador de reducer
const combine = redux.combineReducers;
// importando as ações
const { incrementAction, decrementAction } = require("./actions/CounterActions");

const { addItemAction } = require ("./actions/ListActions");
// importando os reducers
const counterReducer = require("./reducers/CounterReducer");

const listReducer = require("./reducers/ListReducer");

const allReducers = redux.combineReducers({
  counter: counterReducer,
  list: listReducer
})

const store = createStore(allReducers);
console.log(store.getState())
// pega o estado que está armazenado no store
store.subscribe(() => {console.log(store.getState())});

store.dispatch(addItemAction("Um novo Item"));

store.dispatch(incrementAction());
store.dispatch(incrementAction(1));
store.dispatch(incrementAction(5));