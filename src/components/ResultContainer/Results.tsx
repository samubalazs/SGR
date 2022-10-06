import styled from "styled-components"

import { RepositoryData } from "../../types"

type ResultProps = {
  queryResult: RepositoryData[]
}

export const Results: React.FC<ResultProps> = (props) => {
  const { queryResult } = props
  return <ResultContainer>{queryResult[0].name}</ResultContainer>
}

const ResultContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`
