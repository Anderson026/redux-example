// importando o redux
const { createStore, applyMiddleware } = require("redux");
// importando o redux thunk
const thunk = require("redux-thunk").default;
// importando o fetch
const fetch = require("node-fetch");
// instanciando o objeto
const initialState = [{id: 0, title: "Tarefa", completed: false}];

// criando a ação
const addItem = (item) => {return{type: "ADD_ITEM", payload: item}};
// criando a função com o redux thunk de modo assíncrono para poder adicionar mais itens a lista
const loadItemAndAdd = () => {
  return (dispatch) => {
    fetch("https://jsonplaceholder.typicode.com/todos/1").then(res=>res.json()).then(json=>{
      dispatch(addItem(json));
    })
  }
}

// criando o reducer
const listReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return [...state, action.payload];

    default:
      return state;
  }
}

const store = createStore(listReducer, applyMiddleware(thunk));

store.dispatch(loadItemAndAdd());

console.log(store.getState());

store.subscribe(()=> {console.log(store.getState())});