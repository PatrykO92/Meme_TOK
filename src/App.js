import "./App.css";
import { MemeRender } from "./components";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Container, Stack } from "@mui/material";

function App() {
  return (
    <Container sx={{ backgroundColor: "red" }}>
      <MemeRender />
    </Container>
  );
}

export default App;
