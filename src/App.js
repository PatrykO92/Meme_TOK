import "./App.css";

import {
  fetchMeme,
  loadMemesFromLocalStorage,
  saveMemesToLocalStorage,
  Loader,
} from "./utils";

import { MemeRender, SavedMemes } from "./components";
import { Button, Stack, Modal, Typography, Box } from "@mui/material";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function App() {
  const [text, setText] = useState("");

  const [open, setOpen] = useState(false);

  const [actualPage, setActualPage] = useState("");
  const [savedMemes, setSavedMemes] = useState([]);
  const [meme, setMeme] = useState({});

  const handleClose = () => setOpen(false);

  const randomMeme = () => {
    setActualPage("main");
    fetchMeme().then((data) => setMeme(data));
  };

  const saveMeme = () => {
    //save actual meme, if it isn't saved already

    // guard statement, you cant add multiply times same meme.
    if (savedMemes.some((obj) => obj.postLink === meme.postLink)) {
      setText("This meme is already saved!");
      setOpen(true);
      return;
    }
    setText("Meme added to list!");
    setOpen(true);
    setSavedMemes((oldMemes) => [...oldMemes, meme]);
  };

  useEffect(() => {
    // At start of app, load memes saved in local storage, if no memes saved yet, ignore.
    if (loadMemesFromLocalStorage()) setSavedMemes(loadMemesFromLocalStorage());
    // At start of app, load first meme.
    randomMeme();
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
          {actualPage == "main" && (
            <>
              <Button variant="outlined" href={meme.postLink} target="_blank">
                Link
              </Button>
              <Button
                variant="contained"
                color="success"
                onClick={() => saveMeme()}
              >
                Save meme
              </Button>
            </>
          )}

          <Link to="/saved_memes" style={{ textDecoration: "none" }}>
            <Button
              variant="contained"
              color="success"
              onClick={() => {
                setActualPage("memes");
              }}
            >
              Saved memes
            </Button>
          </Link>
          <Link to="/" style={{ textDecoration: "none" }}>
            <Button variant="contained" onClick={() => randomMeme()}>
              Random Meme
            </Button>
          </Link>
        </Stack>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography
              id="modal-modal-title"
              variant="h6"
              component="h2"
              textAlign="center"
            >
              {text}
            </Typography>
          </Box>
        </Modal>
      </Stack>
    </BrowserRouter>
  );
}

export default App;
