import "./App.css";

import { fetchMeme } from "./utils";
import { MemeRender } from "./components";

import { Button, Stack } from "@mui/material";
import { useState, useEffect } from "react";

function App() {
  const [meme, setMeme] = useState({});

  const nextMeme = () => {
    fetchMeme().then((data) => setMeme(data));
    console.log("Clicked");
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
      <MemeRender meme={meme} />
      <Stack spacing={2} direction="row">
        <Button variant="contained" onClick={() => nextMeme()}>
          Next!
        </Button>
        <Button variant="contained">Next!</Button>
      </Stack>
    </Stack>
  );
}

export default App;
