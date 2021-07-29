
// criando o reducer
module.exports = (state = ["Um item padrão"], action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return [...state, action.payload];
  
    default:
      return state
  }
}