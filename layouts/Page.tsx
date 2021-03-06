import React from "react";
import Head from "./Head";
import { Layout, Menu, Breadcrumb, Avatar, Dropdown } from 'antd';
import {
  PlaySquareOutlined,
  WarningOutlined,
  DashboardOutlined,
  HistoryOutlined,
  SelectOutlined,
  VideoCameraAddOutlined,
  UserOutlined,
  SettingOutlined,
  AppstoreOutlined,
  LoginOutlined
} from '@ant-design/icons';
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState, useEffect } from "react";

const { Header, Content, Footer, Sider } = Layout;

const userMenu = (
  <Menu>
    <Menu.Item>
      <a href="#">Settings</a>
    </Menu.Item>
    <Menu.Item>
      <a href="#">Log out</a>
    </Menu.Item>
  </Menu>
);

class SettingsOutlined extends React.Component {
  render() {
    return null;
  }
}

const Page: React.FC = (props) => {
  const router = useRouter()
  const [activeMenu, setActiveMenu] = useState('errors')
  useEffect(() => {
    if (router.pathname == '/') {
      setActiveMenu('errors')
    } else {
      setActiveMenu(router.pathname.substring(1))
    }
  }, [])
  return (
  <Layout style={{ minHeight: '100vh' }}>
    <Head {...props} />
    <Sider collapsible >
      <div className="logo">
        <h1 style={{ color: '#fff', marginTop: 12,marginLeft: 12, fontSize: '2em' }}>VOT</h1>
      </div>
      <Menu theme="dark" selectedKeys={[activeMenu]} mode="inline">
        <Menu.Item key="dashboard" icon={<DashboardOutlined />}>Dashboard</Menu.Item>
        <Menu.Item key="views" icon={<PlaySquareOutlined />}>
          <Link href="/views">
            <a >Views</a>
          </Link>
        </Menu.Item>
        <Menu.Item key="duration" icon={<HistoryOutlined />}>Duration</Menu.Item>
        <Menu.Item key="buffering" icon={<SelectOutlined />}>Buffering</Menu.Item>
        <Menu.Item key="join_time" icon={<VideoCameraAddOutlined />}>Join time</Menu.Item>
        <Menu.Item key="errors" icon={<WarningOutlined />}>
          <Link href="/">Errors</Link>
        </Menu.Item>
        <Menu.Item key="settings" icon={<SettingOutlined />}>Settings</Menu.Item>
        <Menu.Item key="demo" icon={<AppstoreOutlined />}>
          <Link href="/demo">Demo</Link>
        </Menu.Item>
        <Menu.Item key="shaka_demo" icon={<AppstoreOutlined />}>
          <Link href="/shaka_demo">Shaka Demo</Link>
        </Menu.Item>
        <Menu.Item key="signin" icon={<LoginOutlined />}>
          <Link href="/signin">Sign in</Link>
        </Menu.Item>
        {/* <Menu.Item key="2" icon={<DesktopOutlined />}>
          Option 2
            </Menu.Item>
        <SubMenu key="sub1" icon={<UserOutlined />} title="User">
          <Menu.Item key="3">Tom</Menu.Item>
          <Menu.Item key="4">Bill</Menu.Item>
          <Menu.Item key="5">Alex</Menu.Item>
        </SubMenu>
        <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
          <Menu.Item key="6">Team 1</Menu.Item>
          <Menu.Item key="8">Team 2</Menu.Item>
        </SubMenu>
        <Menu.Item key="9" icon={<FileOutlined />}>
          Files
            </Menu.Item> */}
      </Menu>
    </Sider>
    <Layout className="site-layout">
      <Header style={{ padding: 0, backgroundColor: '#fff', textAlign: 'right' }}>
        <Dropdown overlay={userMenu} trigger={['click']}>
          <a className="ant-dropdown-link" onClick={e => e.preventDefault()} style={{marginRight: 24}}>
            <Avatar size={40} icon={<UserOutlined />} />
          </a>
        </Dropdown>
      </Header>
      <Content style={{ margin: '0 16px' }}>
        {/*<Breadcrumb style={{ margin: '16px 0' }}>*/}
          {/* <Breadcrumb.Item>Errors</Breadcrumb.Item>
          <Breadcrumb.Item>Pulse</Breadcrumb.Item> */}
        {/*</Breadcrumb>*/}
        <div className="site-layout-background" style={{ padding: 12, paddingTop: 0, minHeight: 360, maxWidth: 1200 }}>
          {props.children}
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Streamband 2021</Footer>
    </Layout>
  </Layout>
)}

export default Page;

