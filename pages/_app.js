import { GlobalStyle } from "@/components/GlobalStyle"
import theme from "@/utils/theme"
import { ThemeProvider } from "styled-components"

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
