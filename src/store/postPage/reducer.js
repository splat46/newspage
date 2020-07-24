// src/store/postPage/reducer
const initialState = {
  loading: true,
  post: null,
  comments: [],
};

export default function postPageSliceReducer(state = initialState, action) {
  switch (action.type) {
    case "POST_START_LOADING":
      return {
        ...state,
        loading: true,
      };
    case "POST_FETCHED":
      return {
        loading: false,
        post: action.payload.post,
        comments: action.payload.comments,
      };
    default:
      return state;
  }
}
