import Router from "./router/Router";
import GlobalStyles from "./styles/globalStyles";
import dayjs from "dayjs";
import "dayjs/locale/ko";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "styled-components";
import theme from "@styles/theme";

dayjs.locale("ko");

// Create a client
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <Router />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
