import { Avatar } from "@material-ui/core";
import React from "react";
import InputOptions from "./InputOptions";
import "./Post.css";
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ChatIcon from '@material-ui/icons/Chat';
import ShareIcon from '@material-ui/icons/Share';
import SendIcon from '@material-ui/icons/Send';

function Post({ name, description, message, photoUrl }) {
  return (
    <div className="post">
      <div className="post__header">
        <Avatar />
        <div className="post__info">
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>
      <div className="post__body">
        <p>{message}</p>
      </div>
      <div className="post__buttons">
          <InputOptions Icon={ThumbUpAltIcon} title="Like" color="gray" />
          <InputOptions Icon={ChatIcon} title="Comment" color="gray" />
          <InputOptions Icon={ShareIcon} title="Share" color="gray" />
          <InputOptions Icon={SendIcon} title="Send" color="gray" />

      </div>
    </div>
  );
}

export default Post;
