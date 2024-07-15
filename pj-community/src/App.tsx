import Router from "./router/Router";
import GlobalStyles from "./styles/globalStyles";
import dayjs from "dayjs";
import "dayjs/locale/ko";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

dayjs.locale("ko");

// Create a client
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyles />
      <Router />
    </QueryClientProvider>
  );
}

export default App;
