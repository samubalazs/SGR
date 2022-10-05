import { DownOutlined, SearchOutlined, UpOutlined } from "@ant-design/icons"
import { useQuery } from "@tanstack/react-query"
import { Button, Checkbox, Form, Input } from "antd"
import { useState } from "react"
import styled from "styled-components"

import fetchRepositories from "../services/api"
import { FormData } from "../types"

export const Search: React.FC = () => {
  const { data, error, isLoading } = useQuery(["repos"], fetchRepositories)

  const [form] = Form.useForm()
  const initalFormData = {
    searchBy: "",
    searchIn: [],
  }

  const [isOpen, setIsOpen] = useState(false)
  const [formData, setFormData] = useState<FormData>(initalFormData)

  const plainOptions = ["Name", "Description", "Readme"]

  const handleSubmit = () => console.log(formData)
  const handleReset = () => form.resetFields()

  return (
    <>
      {isLoading && "Loading..."}
      {error && "An error has occurred: " + error}
      <Wrapper isOpen={isOpen}>
        <FormContainer
          form={form}
          onValuesChange={(changedValues: any, values: any) =>
            setFormData({ ...values, ...changedValues })
          }
          initialValues={initalFormData}
        >
          <Form.Item
            name={"searchBy"}
            label={"Search By"}
            rules={[
              { required: true, message: "Please input your query!" },
              { min: 3, message: "Query must be min 3 chars long" },
            ]}
          >
            <Input placeholder={"Search By"} />
          </Form.Item>
          <Form.Item
            name={"searchIn"}
            label={"Search In"}
            rules={[{ required: true, message: "Please select at least one" }]}
          >
            <CheckboxStyled options={plainOptions} />
          </Form.Item>
          {isOpen && <>a</>}
        </FormContainer>

        <ControlContainer isOpen={isOpen}>
          <Button icon={<SearchOutlined />} onClick={handleSubmit}>
            Search
          </Button>
          <Button onClick={handleReset}>Reset</Button>
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
