import { useState } from "react"
import reactLogo from "./assets/react.svg"
import "./App.css"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

function App() {
  const [count, setCount] = useState(0)

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  })

  return (
    <QueryClientProvider client={queryClient}>
      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
    </QueryClientProvider>
  )
}

export default App
