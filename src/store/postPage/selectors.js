// src/store/postPage/selectors
export function selectFeedLoading(reduxState) {
  return reduxState.feed.loading;
}

export function selectFeedPosts(reduxState) {
  return reduxState.feed.post;
}

export function selectPostAndComments(reduxState) {
  return reduxState.postPage.loading
    ? null
    : {
        post: reduxState.postPage.post,
        comments: reduxState.postPage.comments,
      };
}
