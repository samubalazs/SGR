import { useQuery } from "@tanstack/react-query"
import { useState } from "react"
import styled from "styled-components"

import fetchRepositories from "../services/api"

export const Home: React.FC = () => {
  const { data, error, isLoading } = useQuery(["repos"], fetchRepositories)

  const [count, setCount] = useState(0)

  return (
    <>
      {isLoading && "Loading..."}
      {error && "An error has occurred: " + error}
      {data && <>a</>}
      <Button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </Button>
    </>
  )
}

const Button = styled.button`
  background: ${({ theme }) => theme.normal.background};
  border-radius: 5px;
  border: solid 1px ${({ theme }) => theme.normal.border};
`
