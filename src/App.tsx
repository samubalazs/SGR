import { AppstoreOutlined } from "@ant-design/icons"
import { Col, Dropdown, Layout, Menu, Row } from "antd"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"

import logo from "./assets/logo.png"
import { RouterContent } from "./components/RouterContent/RouterContent"
import { dropMenuItems, menuItems } from "./constants/menuItems"

const { Header, Content } = Layout

function App() {
  const navigate = useNavigate()

  const [colSpan, setColspan] = useState(20)

  const dropdownMenu = (
    <MenuStyled
      items={dropMenuItems}
      onClick={({ key }) => handleMenuClick(key)}
    />
  )

  const handleMenuClick = (key: string) => {
    if (key === "mobile") {
      setColspan(10)
    } else if (key === "desktop") {
      setColspan(20)
    }
    navigate(key)
  }

  return (
    <RowStyled justify="center">
      <Col span={colSpan}>
        <LayoutStyled>
          <HeaderStyled>
            <ImgStyled src={logo} />
            <MenuStyled
              items={menuItems}
              defaultActiveFirst={true}
              onClick={({ key }) => handleMenuClick(key)}
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
  margin: 15px;
  padding: 10px;
  border: solid 1px ${({ theme }) => theme.container.border};
`

const ImgStyled = styled.img`
  height: 40px;
`

export default App
