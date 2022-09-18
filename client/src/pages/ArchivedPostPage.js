import React, { useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import { getPosts } from "../actions/posts";

// import memories from "./images/memories.png";
import { AppBar, Container, Grid, Grow, Typography } from "@mui/material";

import Post from "../components/Post";

const ArchivedPostPage = () => {
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return (
    <Container maxWidth="lg">
      <Grow in>
        <Container>
          <Grid
            container
            justify="space-between"
            alignItems="stretch"
            spacing={3}
            direction="column"
            marginTop="30px"
          >
            <Grid
              direction="column-reverse"
              container
              alignItems="center"
              spacing={3}
            >
              {posts

                .filter(function (post) {
                  return post.archived === true;
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
        </Container>
      </Grow>
    </Container>
  );
};

export default ArchivedPostPage;
