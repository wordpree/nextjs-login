import React from "react";
import Image from "next/image";
import { useFileContext } from "../utils/context";
import { avatar, role } from "../utils/constant.js";
import { getRandomNum } from "../utils/helper.js";

const CommentsUi = ({ name }) => {
  const [state] = useFileContext();
  if (state.comments.length === 0) {
    return null;
  }
  console.log(state.comments);
  const commentArr = state.comments.find((c) => c.name === name);

  return (
    <div className="cmt-entry">
      {commentArr && (
        <ul>
          {commentArr.comment.map((c, i) => (
            <li key={i} className="cmt-list">
              <div className="meta">
                <Image
                  alt={avatar[getRandomNum()].title}
                  height="32"
                  width="32"
                  src={avatar[getRandomNum()].img}
                />
                <span className="cmt-title">
                  {avatar[getRandomNum()].title}
                </span>
                <span className="cmt-date">{new Date().toLocaleString()}</span>
              </div>
              <div>
                <p className="cmt-content">{c}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CommentsUi;
