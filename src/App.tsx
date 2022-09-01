import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { PostsProvider } from "./contexts/PostsContext";
import { Home } from "./pages/Home";
import { Router } from "./router";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";


export function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <PostsProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </PostsProvider>
    </ThemeProvider>
  )
}
