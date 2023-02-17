import { useState, useEffect } from "react";

import { Typography, CardMedia, Card, Stack } from "@mui/material";

const MemeRender = ({ meme }) => {
  const [blured, setBlured] = useState(0);

  useEffect(() => {
    if (meme.nsfw) setBlured("1.5rem");
  }, [meme]);

  return (
    <Card
      sx={{
        margin: "5px",
        padding: "15px",
        maxWidth: "1200px",
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
      <CardMedia
        component="img"
        alt={meme.title || "img"}
        sx={{
          width: "auto",
          maxWidth: "95%",
          margin: "auto",
          border: "1px solid black",
          filter: `blur(${blured})`,
        }}
        image={`${meme.url}`}
        onClick={() => {
          setBlured("0");
        }}
      />
    </Card>
  );
};

export default MemeRender;
