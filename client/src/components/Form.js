import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Paper from "@mui/material/Paper";
import { createPost, updatePost } from "../actions/posts";
import { Box, Button, TextField } from "@mui/material";

const Form = ({ currentId, setCurrentId }) => {
  const initialValues = {
    creator: "",
    title: "",
    description: "",
    content: "",
  };
  const [postData, setPostData] = useState(initialValues);
  const [formErrors, setFormErrors] = useState(initialValues);
  const [isSubmit, setIsSubmit] = useState(false);
  const dispatch = useDispatch();
  const post = useSelector((state) =>
    currentId ? state.posts.find((message) => message._id === currentId) : null
  );

  const clear = () => {
    setCurrentId(0);
    setPostData({
      creator: "",
      title: "",
      description: "",
      content: "",
    });
  };

  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (currentId === 0) {
      dispatch(createPost(postData));

      clear();
    } else {
      dispatch(updatePost(currentId, postData));
      clear();
    }
  };

  return (
    <Paper>
      <form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <Box textAlign="center" padding="3px" fontSize="25px">
          {currentId ? `Editing "${post.title}"` : "Creating a Post"}
        </Box>
        <Box padding="5px 8px">
          <TextField
            name="creator"
            variant="outlined"
            label="Creator"
            fullWidth
            value={postData.creator}
            onChange={(e) =>
              setPostData({ ...postData, creator: e.target.value })
            }
          />
        </Box>
        <Box padding="5px 8px">
          <TextField
            name="title"
            variant="outlined"
            label="Title"
            fullWidth
            value={postData.title}
            onChange={(e) =>
              setPostData({ ...postData, title: e.target.value })
            }
          />
        </Box>
        <Box padding="5px 8px">
          <TextField
            name="Description"
            variant="outlined"
            label="Description"
            fullWidth
            multiline
            rows={4}
            value={postData.description}
            onChange={(e) =>
              setPostData({ ...postData, description: e.target.value })
            }
          />
        </Box>
        <Box padding="5px 8px">
          <TextField
            name="Content"
            variant="outlined"
            label="Content"
            fullWidth
            multiline
            rows={4}
            value={postData.content}
            onChange={(e) =>
              setPostData({ ...postData, content: e.target.value })
            }
          />
        </Box>
        <Box padding="5px 8px">
          <Button
            variant="contained"
            color="primary"
            size="large"
            type="submit"
            fullWidth
          >
            Submit
          </Button>
        </Box>
        <Box padding="5px 8px">
          <Button
            variant="contained"
            color="secondary"
            size="small"
            onClick={clear}
            fullWidth
          >
            Clear
          </Button>
        </Box>
      </form>
    </Paper>
  );
};

export default Form;
