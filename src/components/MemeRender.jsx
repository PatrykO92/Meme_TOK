import { Typography, CardMedia, Card, Stack, Button } from "@mui/material";

const MemeRender = ({ meme }) => {
  return (
    <Card
      sx={{
        maxHeight: "90vh",
        margin: "5px",
      }}
    >
      <Stack
        direction="row"
        spacing={2}
        padding={1}
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
        alt="img"
        sx={{
          maxHeight: "75vh",
          width: "auto",
          maxWidth: "95%",
          margin: "auto",
        }}
        image={`${meme.url}`}
      />
      <Stack
        padding={1}
        sx={{
          maxHeight: "4vh",
        }}
        alignItems="center"
      >
        <Button variant="text" href={meme.postLink}>
          Link
        </Button>
      </Stack>
    </Card>
  );
};

export default MemeRender;
