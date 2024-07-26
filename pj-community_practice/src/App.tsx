import Router from "./router/Router";
import GlobalStyles from "./styles/globalStyles";
import dayjs from "dayjs";
import "dayjs/locale/ko";
import { ThemeProvider } from "styled-components";
import theme from "@styles/theme";

dayjs.locale("ko");

function App() {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <Router />
      </ThemeProvider>
    </>
  );
}

export default App;
