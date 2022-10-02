import { useQuery } from "@tanstack/react-query"
import fetchRepositories from "../services/api"

export const Home: React.FC = () => {
  const { data, error, isLoading } = useQuery(["repos"], fetchRepositories)

  return (
    <>
      {isLoading && "Loading..."}
      {error && "An error has occurred: " + error}
      {data && <>a</>}
    </>
  )
}
