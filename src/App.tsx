import { AppstoreOutlined } from "@ant-design/icons"
import { Col, Dropdown, Layout, Menu, Row } from "antd"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"

import logo from "./assets/logo.png"
import { RouterContent } from "./components/RouterContent/RouterContent"
import { dropMenuItems, menuItems } from "./constants/menuItems"

const { Header, Content, Footer } = Layout

function App() {
  const navigate = useNavigate()

  const dropdownMenu = <MenuStyled items={dropMenuItems} />

  return (
    <RowStyled justify="center">
      <Col span={20}>
        <LayoutStyled>
          <HeaderStyled>
            <ImgStyled src={logo} />
            <MenuStyled
              items={menuItems}
              onClick={({ key }) => navigate(key)}
              mode="horizontal"
            />
            <Dropdown overlay={dropdownMenu} placement={"bottomRight"}>
              <MoreIconStyled />
            </Dropdown>
          </HeaderStyled>
          <ContentStyled>
            <RouterContent />
          </ContentStyled>
        </LayoutStyled>
      </Col>
    </RowStyled>
  )
}

const RowStyled = styled(Row)`
  margin-top: 20px;
`

const LayoutStyled = styled(Layout)`
  background: ${({ theme }) => theme.container.background};
  border: solid 1px ${({ theme }) => theme.normal.border};
`

const HeaderStyled = styled(Header)`
  display: flex;
  background: ${({ theme }) => theme.navigation.background};
  border-bottom: solid 1px ${({ theme }) => theme.normal.border};
  padding: 10px;
  line-height: 46px;
`

const MenuStyled = styled(Menu)`
  background: ${({ theme }) => theme.navigation.background};
  border-bottom: unset;
  width: 100%;
`

const MoreIconStyled = styled(AppstoreOutlined)`
  font-size: 150%;
  line-height: 46px;
`

const ContentStyled = styled(Content)`
  margin: 10px;
  padding: 10px;
  border: solid 1px ${({ theme }) => theme.container.border};
`

const ImgStyled = styled.img`
  height: 40px;
`

export default App
