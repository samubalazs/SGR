import { List, Spin } from "antd"
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
        <List
          itemLayout="vertical"
          size="large"
          pagination={{
            pageSize: 10,
            style: { textAlign: "center" },
          }}
          dataSource={queryResult}
          renderItem={(item) => (
            <List.Item key={item.id}>{item.fullName}</List.Item>
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
