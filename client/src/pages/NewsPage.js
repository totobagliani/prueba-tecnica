import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Form from "../components/Form";
import { getPosts } from "../actions/posts";
import Post from "../components/Post";
// import memories from "./images/memories.png";
import {
  AppBar,
  Box,
  CircularProgress,
  Container,
  Grid,
  Grow,
  Typography,
} from "@mui/material";

const NewsPage = () => {
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(getPosts());
    console.log(getPosts());
  }, [currentId, dispatch]);

  return (
    <Container maxWidth="lg">
      <Grow in>
        <Container>
          <Grid
            container
            justify="space-between"
            alignItems="stretch"
            spacing={5}
            margin="10px"
          >
            <Grid item xs={12} sm={7}>
              <Grid
                container
                alignItems="stretch"
                spacing={5}
                direction="column-reverse"
              >
                {posts

                  .filter(function (post) {
                    return post.archived === false;
                  })
                  .map((post) => (
                    <Grid
                      key={post._id}
                      item
                      xs={12}
                      sm={6}
                      md={6}
                      textAlign="center"
                      width="600px"
                    >
                      <Post post={post} setCurrentId={setCurrentId} />
                    </Grid>
                  ))}
              </Grid>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form currentId={currentId} setCurrentId={setCurrentId} />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default NewsPage;
