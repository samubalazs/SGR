import { Col, Layout, Menu, Row } from "antd"
import { useNavigate } from "react-router-dom"

import { RouterContent } from "./components/RouterContent/RouterContent"
import { menuItems } from "./constants/menuItems"

const { Header, Content, Footer } = Layout

function App() {
  const navigate = useNavigate()

  return (
    <Row justify="center">
      <Col span={20}>
        <Layout className="layout">
          <Header>
            <Menu
              items={menuItems}
              onClick={({ key }) => navigate(key)}
              mode="horizontal"
            />
          </Header>
          <Content style={{ padding: "0 50px" }}>
            <RouterContent />
          </Content>
          <Footer style={{ textAlign: "center" }}>
            Ant Design ©2018 Created by Ant UED
          </Footer>
        </Layout>
      </Col>
    </Row>
  )
}

export default App
