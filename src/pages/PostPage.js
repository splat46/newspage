// src/pages/PostPage.js
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchPost } from "../store/postPage/actions";
import { useDispatch, useSelector } from "react-redux";
import { selectPostAndComments } from "../store/postPage/selectors";
import ReactMarkdown from "react-markdown";
import moment from "moment";

export default function PostPage() {
  const dispatch = useDispatch();
  const postPage = useSelector(selectPostAndComments);

  // get the route parameter from react-router-dom
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchPost(id));
  }, [dispatch, id]);

  return (
    <div>
      {!postPage ? (
        <p>Loading...</p>
      ) : (
        <>
          <h1>{postPage.post.title}</h1>
          <p>
            Created at: {postPage.post.createdAt} <br></br>
            Authors: {postPage.post.developer.name}
            <br></br>
            Tags:{" "}
            {postPage.post.tags.map((tag) => {
              return (
                <React.Fragment key={tag.id}>
                  <span>{tag.tag}</span>
                </React.Fragment>
              );
            })}
          </p>
          <br></br>
          {console.log("postpage:", postPage)}
          <ReactMarkdown source={postPage.post.content} />
          <br></br>
          <h2>// Comments</h2>
          {postPage.comments.rows.map((comment) => {
            return (
              <React.Fragment key={comment.id}>
                <span>{comment.text}</span>
                <p className="meta">
                  By <strong>{comment.developer.name}</strong> &bull;{" "}
                  {moment(comment.createdAt).format("DD-MM-YYYY")}{" "}
                </p>
                <br></br>
              </React.Fragment>
            );
          })}
        </>
      )}
    </div>
  );
}
