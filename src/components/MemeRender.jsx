import { useState, useEffect } from "react";

import { Typography, CardMedia, Card, Stack } from "@mui/material";

import { Loader } from "../utils";

const MemeRender = ({ meme }) => {
  const [blured, setBlured] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (meme.nsfw) setBlured("1.5rem");
  }, [meme]);

  return (
    <Card
      sx={{
        margin: "5px",
        padding: "15px",
        maxWidth: "1400px",
      }}
    >
      <Stack
        margin={1}
        direction="row"
        spacing={2}
        sx={{
          maxHeight: "10vh",
        }}
        alignItems="center"
        justifyContent="space-between"
      >
        <Typography variant="h5">{meme.title}</Typography>
        <Typography variant="body2" color="text.secondary">
          {meme.author}
        </Typography>
      </Stack>
      {loading && <Loader />}

      <CardMedia
        component="img"
        alt={meme.title || "img"}
        sx={{
          width: "auto",
          maxWidth: "95%",
          maxHeight: `${loading ? "0px" : "1000px"}`,
          margin: "auto",
          border: "1px solid green",
          filter: `blur(${blured})`,
        }}
        image={`${meme.url}`}
        onClick={() => {
          setBlured("0");
        }}
        onLoad={() => {
          setLoading(false);
        }}
      />
    </Card>
  );
};

export default MemeRender;
