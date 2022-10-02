import { useState } from "react"
import "./App.css"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ThemeProvider } from "styled-components"
import { Home } from "./containers/Home"

function App() {
  const [count, setCount] = useState(0)

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  })

  const theme = { default: "default" }

  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <Home />
      </QueryClientProvider>
    </ThemeProvider>
  )
}

export default App
