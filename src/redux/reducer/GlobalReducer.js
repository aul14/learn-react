import ActionType from "./GlobalActionType";

// DEFAULT NILAI STATE
const initialState = {
  totalOrder: 0,
};

// MEMBUAT REDUX REDUCER DI FOLDER REDUX > REDUCER > GlobalReducer
const rootReducer = (state = initialState, action) => {
  if (action.type == ActionType.PLUS_ORDER) {
    return {
      ...state,
      totalOrder: state.totalOrder + 1,
    };
  } else if (action.type == ActionType.MINUS_ORDER && state.totalOrder > 0) {
    return {
      ...state,
      totalOrder: state.totalOrder - 1,
    };
  } else {
    return state;
  }
};

export default rootReducer;
