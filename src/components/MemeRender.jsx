import { fetchMeme } from "../utils";
import { useEffect, useState } from "react";

import { Box } from "@mui/system";
import { Typography, CardMedia, Card } from "@mui/material";

const MemeRender = () => {
  const [meme, setMeme] = useState({});

  useEffect(() => {
    fetchMeme().then((data) => setMeme(data));
  }, []);

  useEffect(() => {
    console.log(meme);
  }, [meme]);

  return (
    <Box
      sx={{
        height: "90vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          height: "5vh",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
        }}
      >
        <Typography>{meme.author}</Typography>
        <Typography>
          <a href={meme.postLink}>Meme Link</a>
        </Typography>
      </Box>

      <CardMedia
        component="img"
        alt="img"
        sx={{
          maxHeight: "85vh",
          width: "auto",
          maxWidth: "95%",
          margin: "auto",
          boxShadow: "1px 1px 2px black",
        }}
        image={`${meme.url}`}
      />
    </Box>
  );
};

export default MemeRender;
