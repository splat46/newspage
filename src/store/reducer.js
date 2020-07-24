// src/store/reducer.js
import { combineReducers } from "redux";
import feedSlideReducer from "./feed/reducers";
import postPageSliceReducer from "./postPage/reducer";

const reducer = combineReducers({
  feed: feedSlideReducer,
  postPage: postPageSliceReducer,
});

export default reducer;
