import { ThemeProvider } from "styled-components";
import { BlogPosts } from "./pages/BlogPosts";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";


export function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle/>
      <BlogPosts />
    </ThemeProvider>
  )
}
