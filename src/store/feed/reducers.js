const initialState = {
  loading: false,
  posts: [],
};

export default function feedSliceReducer(state = initialState, action) {
  switch (action.type) {
    case "FEED_START_LOADING":
      return {
        ...state,
        loading: true,
      };
    case "FEED_POST_FETCHED":
      return {
        loading: false,
        posts: [...state.posts, ...action.payload],
      };

    default:
      return state;
  }
}
