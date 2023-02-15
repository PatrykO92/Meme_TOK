import "./App.css";

import { fetchMeme } from "./utils";
import { MemeRender } from "./components";

import { Button, Stack } from "@mui/material";
import { useState, useEffect } from "react";

function App() {
  const [meme, setMeme] = useState({});

  const nextMeme = () => {
    fetchMeme().then((data) => setMeme(data));
  };

  useEffect(() => {
    nextMeme();
  }, []);

  return (
    <Stack
      sx={{
        minHeight: "100vh",
      }}
      spacing={2}
      direction="column"
      alignItems="center"
      justifyContent="center"
    >
      <MemeRender justifySelf="center" alignSelf="flex-end" meme={meme} />
      <Stack padding={2} spacing={2} direction="row">
        <Button variant="outlined" href={meme.postLink} target="_blank">
          Link
        </Button>
        <Button variant="contained" color="success">
          Save
        </Button>
        <Button variant="contained" onClick={() => nextMeme()}>
          Next
        </Button>
      </Stack>
    </Stack>
  );
}

export default App;
