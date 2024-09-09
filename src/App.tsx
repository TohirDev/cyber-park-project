import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouteProvider as Routes } from "./providers/routeProvider";

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Routes />
    </QueryClientProvider>
  );
}

export default App;
