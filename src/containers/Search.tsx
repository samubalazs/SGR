import { DownOutlined, SearchOutlined, UpOutlined } from "@ant-design/icons"
import { useQuery } from "@tanstack/react-query"
import { Button, Checkbox, Input } from "antd"
import { useState } from "react"
import styled from "styled-components"

import fetchRepositories from "../services/api"

export const Search: React.FC = () => {
  const { data, error, isLoading } = useQuery(["repos"], fetchRepositories)
  console.log(data)

  const [isOpen, setIsOpen] = useState(false)

  const plainOptions = ["Name", "Description", "Readme"]

  return (
    <>
      {isLoading && "Loading..."}
      {error && "An error has occurred: " + error}
      <Wrapper isOpen={isOpen}>
        <StaticFormContainer>
          <InputStyled>
            <span>Search by</span>
            <Input placeholder="Search" />
          </InputStyled>
          <InputStyled>
            <span>In</span>
            <CheckboxStyled
              options={plainOptions}
              defaultValue={["Name"]}
              onChange={() => true}
            />
          </InputStyled>

          {isOpen && (
            <>
              <InputStyled>
                <span>Search by</span>
                <Input placeholder="Search" />
              </InputStyled>
              <InputStyled>
                <span>In</span>
                <CheckboxStyled
                  options={plainOptions}
                  defaultValue={["Name"]}
                  onChange={() => true}
                />
              </InputStyled>
            </>
          )}
        </StaticFormContainer>

        <ControlContainer>
          <Button icon={<SearchOutlined />}>Search</Button>
          <Button>Reset</Button>
        </ControlContainer>
        <Button
          type="primary"
          icon={isOpen ? <UpOutlined /> : <DownOutlined />}
          size={"middle"}
          onClick={() => setIsOpen(!isOpen)}
        />
      </Wrapper>
    </>
  )
}

const Wrapper = styled.div<{ isOpen: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  min-height: ${({ isOpen }) => (isOpen ? "auto" : "fit-content")};
`

const StaticFormContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 8px;
`

const InputStyled = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  span {
    margin-right: 8px;
  }

  input {
    width: 160px;
  }
`

const ControlContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-self: flex-end;
  gap: 8px;
`

const CheckboxStyled = styled(Checkbox.Group)`
  display: flex;
  align-items: center;
`
