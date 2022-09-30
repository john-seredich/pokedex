import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Pokedex from "./components/Pokedex/Pokedex";

function App() {
  const queryClient = new QueryClient();

  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <Pokedex />
        <ReactQueryDevtools initialIsOpen={true} />
      </QueryClientProvider>
    </div>
  );
}

export default App;
