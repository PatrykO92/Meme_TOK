import { Typography, CardMedia, Card, Stack } from "@mui/material";

const MemeRender = ({ meme }) => {
  console.log(meme);

  if (meme.nsfw) return <div>NSFW</div>;

  return (
    <Card
      sx={{
        margin: "5px",
        padding: "15px",
        maxWidth: "1200px",
      }}
    >
      <Stack
        direction="row"
        spacing={2}
        sx={{
          maxHeight: "10vh",
        }}
        alignItems="center"
        justifyContent="space-between"
      >
        <Typography gutterBottom variant="h5" component="div">
          {meme.title}
        </Typography>
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
        }}
        image={`${meme.url}`}
      />
    </Card>
  );
};

export default MemeRender;
