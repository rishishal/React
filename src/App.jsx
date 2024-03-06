import Home from "./components/Home";
import { ThemeProvider } from "./context/themeContext";

const App = () => {
  return (
    <div>
      <ThemeProvider>
        <Home />
      </ThemeProvider>
    </div>
  );
};

export default App;
