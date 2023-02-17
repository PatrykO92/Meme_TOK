import "./App.css";

import {
  fetchMeme,
  loadMemesFromLocalStorage,
  saveMemesToLocalStorage,
} from "./utils";
import { MemeRender } from "./components";

import { Button, Stack } from "@mui/material";
import { useState, useEffect } from "react";

function App() {
  const [savedMemes, setSavedMemes] = useState([]);
  const [meme, setMeme] = useState({});

  const nextMeme = () => {
    fetchMeme().then((data) => setMeme(data));
  };

  const saveMeme = () => {
    const newMeme = meme;
    setSavedMemes((oldMemes) => {
      if (oldMemes) {
        return [...oldMemes, newMeme];
      } else {
        return newMeme;
      }
    });
  };

  useEffect(() => {
    // At start of app, load memes saved in local storage, if no memes saved yet, ignore.
    if (loadMemesFromLocalStorage()) setSavedMemes(loadMemesFromLocalStorage());
    // At start of app, load first meme.
    nextMeme();
  }, []);

  useEffect(() => {
    // When state of savedMemes change, save it to local storage.
    saveMemesToLocalStorage(savedMemes);
  }, [savedMemes]);

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
        <Button variant="contained" color="success" onClick={() => saveMeme()}>
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
