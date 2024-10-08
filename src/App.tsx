// external import
import { useContext } from "react";

// asset
import "./App.css";

// internal import
import { ThemeManager } from "./stateManager/Theme";
import { Paper, ThemeProvider } from "@mui/material";
import Nav from "./components/nav";
import Home from "./pages/home";
import Footer from "./components/Footer";
import Loader from "./components/Feedback/Loader";
import useGetPokemonsDetails from "./hooks/useGetPokemonsDetails";
import Toast from "./components/Feedback/toast";

function App() {
  const { theme, mode, isLessThanMD } = useContext(ThemeManager);
  const data = useGetPokemonsDetails();

  return (
    <ThemeProvider theme={theme}>
      {/* Background with a fixed height to take up the view port  */}
      <Paper
        square
        elevation={0}
        sx={{
          height: "100vh",
          backgroundColor: mode ? "" : theme.gray.main,
        }}
      >
        {/* Internal Background with a dynamic height to align with content*/}
        <Paper
          square
          elevation={0}
          sx={{
            pt: isLessThanMD ? 0 : 3.5,
            pb: isLessThanMD ? 0 : 5,
            height: "auto",
            backgroundColor: mode ? "" : theme.gray.main,
          }}
        >
          <Loader loading={data.isLoading} />
          <Toast data={data} />
          <Nav />
          <Home />
          <Footer />
        </Paper>
      </Paper>
    </ThemeProvider>
  );
}

export default App;
