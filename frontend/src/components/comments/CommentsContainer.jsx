import React, { useEffect, useState } from "react";
import CommentForm from "./CommentForm";

import { getCommentsData } from "../../data/Comments";
import Comment from "./Comment";

const CommentsContainer = ({ className, loggedinUserId }) => {
  const [comments, setcomments] = useState([]);
  const mainComments = comments.filter((comment) => comment.parent === null);
  const [changedComment, setChangedComment] = useState(null);

  console.log(comments);

  useEffect(() => {
    (async () => {
      const commentData = await getCommentsData();
      setcomments(commentData);
    })();
  }, []);

  const addCommentHandler = (value, parent = null, replyOnUser = null) => {
    const newComment = {
      _id: Math.random().toString(),
      user: {
        _id: "a",
        name: "Mohammad Rezaii",
      },
      desc: value,
      post: "1",
      parent: parent,
      replyOnUser: replyOnUser,
      createdAt: new Date().toISOString(),
    };
    setcomments((curState) => {
      return [newComment, ...curState];
    });
    setChangedComment(null);
  };

  const deleteCommentHandler = (commentId) => {
    const updatedComments = comments.filter((comment) => {
      return comment._id !== commentId;
    });
    setcomments(updatedComments);
  };

  const updateCommentHandler = (value, commentId) => {
    const updatedComments = comments.map((comment) => {
      if (comment._id === commentId) {
        return { ...comment, desc: value };
      }
      return comment;
    });
    setcomments(updatedComments);
    setChangedComment(null);
  };

  const getRepliesHandler = (commentId) => {
    return comments
      .filter((comment) => comment.parent === commentId)
      .sort((a, b) => {
        return (
          new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
        );
      });
  };

  return (
    <div className={`${className}`}>
      <CommentForm
        buttonLabel="Send"
        formSubmitHanlder={(value) => addCommentHandler(value)}
      />
      <div className="space-y-4 mt-8">
        {mainComments.map((comment) => (
          <Comment
            key={comment._id} // Assign unique _id as key prop
            comment={comment}
            loggedinUserId={loggedinUserId}
            changedComment={changedComment}
            setChangedComment={setChangedComment}
            addComment={addCommentHandler}
            updateComment={updateCommentHandler}
            deleteComment={deleteCommentHandler}
            replies={getRepliesHandler(comment._id)}
          />
        ))}
      </div>
    </div>
  );
};

export default CommentsContainer;
