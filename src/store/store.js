import { applyMiddleware, createStore } from "redux";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";
import _ from "lodash";

const initialState = {};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    //
    case "FETCH_ITEMS": {
      const newItems = _.mapKeys(action.payload, "id");
      saveToStorage({ ...state, ...newItems });
      return { ...state, ...newItems };
    }
    case "ADD_ITEM": {
      const newItems = _.mapKeys(action.payload, "id");
      saveToStorage({ ...state, ...newItems });
      return { ...state, ...newItems };
    }
    case "UPDATE_ITEM": {
      saveToStorage({
        ...state,
        [action.payload.id]: action.payload
      });
      return {
        ...state,
        [action.payload.id]: action.payload
      };
    }
    case "REMOVE_ITEM": {
      Object.keys(action.payload).forEach(key => {
        if (state[key] == action.payload[key]) delete state[key];
      });
      saveToStorage(_.omit(state, action.payload));
      return _.omit(state, action.payload);
    }
  }
  return state;
};

const saveToStorage = state => {
  console.log(
    "%c Save to storage",
    "background: green; color: white",
    state,
    _.toArray(state)
  );
  localStorage.setItem("state", JSON.stringify(_.toArray(state)));
};
const middleware = applyMiddleware(thunk, createLogger());

export default createStore(reducer, middleware);
