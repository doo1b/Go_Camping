import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import useKakaoLoader from "./hooks/useKakaoLoader";
import Router from "./router/Router";

function App() {
  useKakaoLoader();
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient} >
      <Router />
    </QueryClientProvider>
  );
}

export default App;
