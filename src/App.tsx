import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import PokedexMain from "./components/PokedexMain/PokedexMain";

function App() {
  const queryClient = new QueryClient();

  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <PokedexMain />
        <ReactQueryDevtools initialIsOpen={true} />
      </QueryClientProvider>
    </div>
  );
}

export default App;
