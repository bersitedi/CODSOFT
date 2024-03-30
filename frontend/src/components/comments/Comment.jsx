import React from "react";
import { images } from "../../constant";
import { FiMessageSquare, FiEdit2, FiTrash } from "react-icons/fi";
import CommentForm from "./CommentForm";

const Comment = ({
  comment,
  loggedinUserId,
  changedComment,
  setChangedComment,
  addComment,
  parentId = null,
  updateComment,
  deleteComment,
  replies,
}) => {
  const isUserLoggedin = Boolean(loggedinUserId);
  const commentBelongsToUser = loggedinUserId === comment.user._id;
  const isReplying =
    changedComment &&
    changedComment.type === "replying" &&
    changedComment._id === comment._id;
  const isEditing =
    changedComment &&
    changedComment.type === "editing" &&
    changedComment._id === comment._id;
  const repliedCommentId = parentId ? parentId : comment._id;
  const replyOnUserId = comment.user._id;

  return (
    <div className="flex flex-nowrap items-start gap-x-3 bg-[#F2F4F5] p-3 rounded-lg">
      <img
        src={images.PostProfileImage}
        alt=""
        className="w-9 h-9 object-cover rounded-full"
      />
      <div className="flex-1 flex flex-col">
        <h5 className="font-bold text-dark-eerie text-xs ">
          {comment.user.name}
        </h5>
        <span className="text-xs text-dark-light">
          {new Date(comment.createdAt).toLocaleDateString("en-US", {
            day: "numeric",
            month: "short",
            year: "numeric",
            hour: "2-digit",
          })}
        </span>
        {!isEditing && (
          <p className="font-opensans mt-[10px] text-dark-light">
            {comment.desc}
          </p>
        )}

        {isEditing && (
          <CommentForm
            buttonLabel="Update"
            formSubmitHanlder={(value) => updateComment(value, comment._id)}
            formCancelHandler={() => setChangedComment(null)}
            initialText={comment.desc}
          />
        )}
        <div className="flex items-center gap-x-3 text-dark-light font-roboto text-sm mt-3 mb-3">
          {isUserLoggedin && (
            <button
              className="flex items-center space-x-2"
              onClick={() =>
                setChangedComment({ type: "replying", _id: comment._id })
              }
            >
              <FiMessageSquare className="w-4 h-auto" />
              <span>Reply</span>
            </button>
          )}
          {commentBelongsToUser && (
            <>
              <button
                className="flex items-center space-x-2"
                onClick={() =>
                  setChangedComment({ type: "editing", _id: comment._id })
                }
              >
                <FiEdit2 className="w-4 h-auto" />
                <span>Edit</span>
              </button>
              <button
                className="flex items-center space-x-2"
                onClick={() => deleteComment(comment._id)}
              >
                <FiTrash className="w-4 h-auto" />
                <span>Delete</span>
              </button>
            </>
          )}
        </div>
        {isReplying && (
          <CommentForm
            buttonLabel="Reply"
            formSubmitHanlder={(value) =>
              addComment(value, repliedCommentId, replyOnUserId)
            }
            formCancelHandler={() => setChangedComment(null)}
          />
        )}
        {replies.length > 0 && (
          <div>
            {replies.map((reply) => (
              <Comment
                key={reply._id}
                addComment={addComment}
                changedComment={changedComment}
                setChangedComment={setChangedComment}
                comment={reply}
                deleteComment={deleteComment}
                loggedinUserId={loggedinUserId}
                replies={[]}
                updateComment={updateComment}
                parentId={comment._id}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Comment;
