import React from "react";
// import Head, { HeadProps } from "./Head";
import Head from "./Head";
// import Footer from "./Footer";
import { Layout, Menu, Breadcrumb } from 'antd';
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

const Page: React.FC = (props) => (
  <Layout style={{ minHeight: '100vh' }}>
    <Head {...props} />
    <Sider collapsible >
      <div className="logo"><h1 style={{ color: '#fff', marginTop: 12,marginLeft: 12, fontSize: '2em' }}>VOT</h1></div>
      <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
        <Menu.Item key="1" icon={<PieChartOutlined />}>
          Playback Success
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
      <Header style={{ padding: 0, backgroundColor: '#fff' }} />
      <Content style={{ margin: '0 16px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          {/* <Breadcrumb.Item>Errors</Breadcrumb.Item>
          <Breadcrumb.Item>Pulse</Breadcrumb.Item> */}
        </Breadcrumb>
        <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
          {props.children}
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Streamband 2021</Footer>
    </Layout>
  </Layout>
);

export default Page;
