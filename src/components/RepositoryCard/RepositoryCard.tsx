import { Avatar, List, Spin, Tag, Tooltip } from "antd"
import { format } from "date-fns"
import { Link } from "react-router-dom"
import styled from "styled-components"

import { RepositoryData } from "../../types"

type RepositoryCardProps = {
  repositoryDetails: RepositoryData
}

export const RepositoryCard: React.FC<RepositoryCardProps> = (props) => {
  const { repositoryDetails } = props

  const formatDate = (dateString: string) =>
    format(new Date(dateString), "yyyy-MM-dd")

  return (
    <Wrapper>
      <NameContainer>
        <h2>{repositoryDetails.name}</h2>
        <h4>
          <a target="_blank" rel="noreferrer" href={repositoryDetails.url}>
            {repositoryDetails.fullName}
          </a>
        </h4>
      </NameContainer>
      <CounterContainer>
        <span>Stars: {repositoryDetails.stars}</span>
        <span>Watchers: {repositoryDetails.watchers}</span>
        <span>Forks: {repositoryDetails.issues}</span>
        <span>Issues: {repositoryDetails.issues}</span>
      </CounterContainer>
      <DescriptionContainer>
        {repositoryDetails.description && repositoryDetails.description}
      </DescriptionContainer>
      <TopicsContainer>{repositoryDetails.language}</TopicsContainer>
      <DatesContainer>
        <span>Created at: {formatDate(repositoryDetails.created)}</span>
        <span>Updated at: {formatDate(repositoryDetails.updated)}</span>
      </DatesContainer>
      <UserContainer>
        <Tooltip title={repositoryDetails.ownerName}>
          <a target="_blank" rel="noreferrer" href={repositoryDetails.ownerUrl}>
            <Avatar icon={<img src={repositoryDetails.ownerAvatar} />} />
          </a>
        </Tooltip>
      </UserContainer>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 2fr 1fr 2fr 1fr;
  align-items: center;
  justify-items: center;
  gap: 16px;
  margin: 12px;
  background: ${({ theme }) => theme.normal.background};
  color: white;
  padding: 6px;
`

const NameContainer = styled.div`
  display: grid;

  h2,
  a {
    color: white;
    margin-bottom: 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    text-decoration: none;
  }
`

const CounterContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
  min-width: max-content;
`

const DescriptionContainer = styled.div`
  height: 52px;
  white-space: break-spaces;
  overflow: auto;
  overflow-x: hidden;
  max-width: -webkit-fill-available;
`

const TopicsContainer = styled.div`
  height: 52px;
`

const DatesContainer = styled.div`
  display: grid;
`

const UserContainer = styled.div`
  display: grid;
`
