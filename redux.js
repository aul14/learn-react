const redux = require("redux");

const createStore = redux.createStore;

const initialState = {
  value: 0,
  age: 21,
};

// REDUCER (FUNGSINYA UNTUK MENGUPDATE STORE)
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_AGE":
      return {
        ...state,
        age: state.age + 1,
      };
    case "CHANGE_VALUE":
      return {
        ...state,
        value: (state.value = action.newValue),
      };
    default:
      return state;
  }
};

// STORE
const store = createStore(rootReducer);
console.log(store.getState());

// SUBSCRIPTION (PROSES PEMANGGILAN/PENGGUNAAN STORE YG DIBUTUHKAN)
store.subscribe(() => console.log("store change: ", store.getState()));

// DISPATCH OR ACTION (PROSES PEMANGGILAN REDUCER)
store.dispatch({ type: "ADD_AGE" });
store.dispatch({ type: "CHANGE_VALUE", newValue: 12 });
console.log(store.getState());
