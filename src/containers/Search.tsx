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
        <FormContainer>
          <InputStyled placeholder="Search" />
          <CheckboxStyled
            options={plainOptions}
            defaultValue={["Name"]}
            onChange={() => true}
          />
          <Button icon={<SearchOutlined />}>Search</Button>
          {isOpen && (
            <>
              <InputStyled placeholder="Search" />
              <CheckboxStyled
                options={plainOptions}
                defaultValue={["Name"]}
                onChange={() => true}
              />
              <Button icon={<SearchOutlined />}>Search</Button>
            </>
          )}
        </FormContainer>
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
  min-height: ${({ isOpen }) => (isOpen ? "500px" : "fit-content")};
`

const FormContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 3fr 1fr;
  gap: 20px;
`

const InputStyled = styled(Input)`
  width: 200px;
`

const CheckboxStyled = styled(Checkbox.Group)`
  display: flex;
  align-items: center;
`
