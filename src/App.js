import "./App.css";

import {
  fetchMeme,
  loadMemesFromLocalStorage,
  saveMemesToLocalStorage,
} from "./utils";

import { MemeRender, SavedMemes } from "./components";
import { Button, Stack } from "@mui/material";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  const [savedMemes, setSavedMemes] = useState([]);
  const [meme, setMeme] = useState({});

  const nextMeme = () => {
    fetchMeme().then((data) => setMeme(data));
  };

  const saveMeme = () => {
    //save actual meme, if it isn't saved already

    // guard statement, you cant add multiply times same meme.
    if (savedMemes.some((obj) => obj.postLink === meme.postLink)) return;

    setSavedMemes((oldMemes) => [...oldMemes, meme]);
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
    <BrowserRouter>
      <Stack
        sx={{
          minHeight: "100vh",
        }}
        spacing={2}
        direction="column"
        alignItems="center"
        justifyContent="center"
      >
        <Routes>
          <Route
            path="/"
            element={
              <MemeRender
                justifySelf="center"
                alignSelf="flex-end"
                meme={meme}
              />
            }
          />
          <Route
            path="/saved_memes"
            element={<SavedMemes memes={savedMemes} />}
          />
        </Routes>
        <Stack padding={2} spacing={2} direction="row">
          <Button variant="outlined" href={meme.postLink} target="_blank">
            Link
          </Button>

          <Link to="/saved_memes" style={{ textDecoration: "none" }}>
            <Button variant="contained" color="success">
              Saved memes
            </Button>
          </Link>
          <Button
            variant="contained"
            color="success"
            onClick={() => saveMeme()}
          >
            Save meme
          </Button>
          <Link to="/" style={{ textDecoration: "none" }}>
            <Button variant="contained" onClick={() => nextMeme()}>
              Next
            </Button>
          </Link>
        </Stack>
      </Stack>
    </BrowserRouter>
  );
}

export default App;
