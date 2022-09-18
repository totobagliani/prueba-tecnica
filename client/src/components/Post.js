import React, { useState } from "react";

import moment from "moment";
import { useDispatch } from "react-redux";

import { archivePost, deletePost } from "../actions/posts";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Box,
  TextField,
} from "@mui/material";

const Post = ({ post, setCurrentId }) => {
  const dispatch = useDispatch();

  const handleArchive = async (e) => {
    dispatch(archivePost(post._id));
  };

  return (
    <Card className="card">
      <div>
        <CardContent>
          <Typography gutterBottom variant="h5">
            {post.title}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            {post.description}
          </Typography>

          <Box paddingTop="10px">
            <Typography variant="caption">{post.creator} |</Typography>
            {window.location.pathname === "/" ? (
              <Typography variant="caption" marginLeft="5px">
                {moment(post.createdAt).format("LLL")}
              </Typography>
            ) : (
              <Typography variant="caption" marginLeft="5px">
                {moment(post.updatedAt).format("LLL")}
              </Typography>
            )}
          </Box>
        </CardContent>
      </div>
      <Box margin="auto" width="80%">
        {" "}
        <hr />
      </Box>

      <CardContent>
        <Typography component="p" color="textSecondary">
          {post.content}
        </Typography>
      </CardContent>

      {window.location.pathname === "/" ? (
        <Box display="flex" justifyContent="flex-end">
          <CardActions>
            <Button
              color="primary"
              size="small"
              onClick={() => setCurrentId(post._id)}
            >
              EDIT
            </Button>

            <Button
              size="small"
              color="primary"
              onClick={() => handleArchive()}
            >
              ARCHIVE
            </Button>
          </CardActions>
        </Box>
      ) : (
        <Box display="flex" justifyContent="flex-end">
          <CardActions>
            <Button
              size="small"
              color="primary"
              onClick={() => dispatch(deletePost(post._id))}
            >
              {" "}
              DELETE
            </Button>
          </CardActions>
        </Box>
      )}
    </Card>
  );
};

export default Post;
