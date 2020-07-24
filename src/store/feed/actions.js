import axios from "axios";
import { API_URL } from "../../config";

export function startLoading() {
  return {
    type: "FEED_START_LOADING",
  };
}
export function postsFetched(morePosts) {
  return {
    type: "FEED_POST_FETCHED",
    payload: morePosts,
  };
}

export async function fetchNext5Posts(dispatch, getState) {
  dispatch(startLoading());
  const offset = getState().feed.posts.length;
  const res = await axios.get(`${API_URL}/posts?offset=${offset}&limit=5`);

  const morePosts = res.data.rows;
  console.log(res);
  dispatch(postsFetched(morePosts));
}
