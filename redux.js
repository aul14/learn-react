const redux = require("redux");

const createStore = redux.createStore;

const initialState = {
  value: 0,
};
// REDUCER (FUNGSINYA UNTUK MENGUPDATE STORE)
const rootReducer = (state = initialState, action) => {
  return state;
};
// STORE
const store = createStore(rootReducer);
console.log(store.getState());
// DISPATCH OR ACTION (PROSES PEMANGGILAN REDUCER)

// SUBSCRIPTION (PROSES PEMANGGILAN/PENGGUNAAN STORE YG DIBUTUHKAN)
