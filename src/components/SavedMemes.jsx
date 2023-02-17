import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import IconButton from "@mui/material/IconButton";
import ImageList from "@mui/material/ImageList";
import { Box } from "@mui/system";

import { useState } from "react";

import { MemeRender } from "./";

const SavedMemes = ({ memes }) => {
  return memes.length === 0 ? (
    <Box>You didn't added any memes yet!</Box>
  ) : (
    <ImageList sx={{ width: "75vw", height: "75vh" }}>
      {memes.map((item) => (
        <ImageListItem
          key={item.url}
          sx={{ margin: "5px", border: "1px solid green" }}
        >
          <img
            src={`${item.url}?w=248&fit=crop&auto=format`}
            srcSet={`${item.url}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.title}
            subtitle={item.author}
            actionIcon={
              <IconButton
                sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                aria-label={`info about ${item.title}`}
              ></IconButton>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
};

export default SavedMemes;
