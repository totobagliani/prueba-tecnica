import { AppBar, Box, Button } from "@mui/material";
import React from "react";

export default function Navbar() {
  return (
    <Box>
      <AppBar position="static" color="inherit">
        <Box margin="auto" padding="15px">
          <Button size="large" href="/">
            News
          </Button>
          <Button size="large" href="/archived">
            Archived
          </Button>
        </Box>
      </AppBar>
    </Box>
  );
}
