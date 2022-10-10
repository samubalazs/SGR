import { List, Spin } from "antd"
import styled from "styled-components"

import { RepositoryData } from "../../types"
import { RepositoryCard } from "../RepositoryCard/RepositoryCard"

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
        <List
          itemLayout="vertical"
          size="large"
          pagination={{
            pageSize: 10,
            style: { textAlign: "center" },
          }}
          dataSource={queryResult}
          renderItem={(repositoryDetails) => (
            <RepositoryCard
              key={repositoryDetails.id}
              repositoryDetails={repositoryDetails}
            />
          )}
        />
      )}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
