import { DownOutlined, SearchOutlined, UpOutlined } from "@ant-design/icons"
import { useQuery } from "@tanstack/react-query"
import { Button, Checkbox, Form, Input } from "antd"
import { useState } from "react"
import styled from "styled-components"

import fetchRepositories from "../services/api"

export const Search: React.FC = () => {
  const { data, error, isLoading } = useQuery(["repos"], fetchRepositories)

  const [isOpen, setIsOpen] = useState(true)

  const plainOptions = ["Name", "Description", "Readme"]

  return (
    <>
      {isLoading && "Loading..."}
      {error && "An error has occurred: " + error}
      <Wrapper isOpen={isOpen}>
        <FormContainer
          onValuesChange={(changedValues: any, values: unknown) =>
            console.log(values)
          }
        >
          <Form.Item
            name={"searchBy"}
            label={"Search By"}
            rules={[
              { required: true, message: "Please input your query!" },
              { min: 3, message: "Query must be minimum 3 characters long" },
            ]}
          >
            <Input placeholder={"Search By"} />
          </Form.Item>
          <Form.Item
            name={"searchIn"}
            label={"Search In"}
            rules={[{ required: true }]}
          >
            <CheckboxStyled options={plainOptions} />
          </Form.Item>
          {isOpen && <>a</>}
        </FormContainer>

        <ControlContainer isOpen={isOpen}>
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
  justify-content: space-around;
  align-items: flex-start;
  gap: 15px;
  min-height: ${({ isOpen }) => (isOpen ? "auto" : "fit-content")};
`

const FormContainer = styled(Form)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
`

const ControlContainer = styled.div<{ isOpen: boolean }>`
  display: flex;
  justify-content: flex-start;
  align-self: ${({ isOpen }) => (isOpen ? "flex-end" : "flex-start")};
  gap: 8px;
`

const CheckboxStyled = styled(Checkbox.Group)`
  display: flex;
  align-items: center;
`
