import { DownOutlined, SearchOutlined, UpOutlined } from "@ant-design/icons"
import { Button, Checkbox, Divider, Form, Input } from "antd"
import axios from "axios"
import { useEffect, useMemo, useState } from "react"
import styled from "styled-components"

import { ResultContainer } from "../components/ResultContainer/ResultContainer"
import { FormData, RepositoryData } from "../types"

export const Search: React.FC = () => {
  const initalFormData = {
    searchBy: "",
    searchIn: [],
  }
  const [formData, setFormData] = useState<FormData>(initalFormData)
  const [queryResult, setQueryResult] = useState<any[]>([])
  const [isLoading, setIsloading] = useState(false)

  const [form] = Form.useForm()

  const [isOpen, setIsOpen] = useState(false)
  const plainOptions = ["Name", "Description", "Readme"]

  const searchQuery = useMemo(() => {
    const queryParts = []

    const searchIn = formData.searchIn.join(",") + ":" + formData.searchBy
    queryParts.push(searchIn)

    return queryParts.join("+")
  }, [formData])

  async function handleSubmit() {
    setIsloading(true)
    await axios
      .get(
        `https://api.github.com/search/repositories?q=${searchQuery}+state:open&sort=created&order=asc`
      )
      .then((resp) => {
        const formattedData = resp.data.items.reduce(
          (acc: RepositoryData[], curr: any) => [
            ...acc,
            {
              name: curr.name,
              fullName: curr.full_name,
              url: curr.html_url,
              stars: curr.stargazers_count,
              watchers: curr.watchers,
              forks: curr.forks,
              issues: curr.open_issues,
              description: curr.description,
              language: curr.language,
              topics: curr.topics,
              created: curr.created_at,
              updated: curr.updated_at,
              ownerName: curr.owner.login,
              ownerUrl: curr.owner.url,
              ownerAvatar: curr.owner.avatar_url,
            },
          ],
          []
        )
        setQueryResult(formattedData)
        setIsloading(false)
      })
  }

  const handleReset = () => form.resetFields()

  return (
    <>
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
      <Divider>Search Result</Divider>
      {queryResult && queryResult.length && (
        <ResultContainer queryResult={queryResult} isLoading={isLoading} />
      )}
    </>
  )
}

const Wrapper = styled.div<{ isOpen: boolean }>`
  display: flex;
  justify-content: space-between;
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
