import { Spin } from "antd"
import styled from "styled-components"

import { RepositoryData } from "../../types"

type ResultProps = {
  queryResult: RepositoryData[]
  isLoading: boolean
}

export const ResultContainer: React.FC<ResultProps> = (props) => {
  const { queryResult, isLoading } = props

  return (
    <Wrapper>
      {isLoading && <Spin />}
      {!isLoading && queryResult && (
        <ul>
          {queryResult.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      )}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`
