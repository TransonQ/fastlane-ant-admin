import "./Main.less";

import { Avatar, Col, Dropdown, Layout, Menu, Popover, Row, Space, message } from "antd";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";

import React from "react";
import logo from "@/assets/fastlane.png";
import logo2 from "@/assets/logo2.png";
import { routes } from "@/configs/routes";
import { useRoutes } from "react-router-dom";
import { useToggle } from "ahooks";

const { Header, Content, Footer, Sider } = Layout;

const Main = () => {
  const elements = useRoutes(routes);
  // ahooks
  const [collapsed, { toggle: onCollapse }] = useToggle();
  // user
  const onClick = ({ key }) => {
    message.info(`Click on item ${key}`);
  };

  const menu_user = (
    <Menu
      onClick={onClick}
      items={[
        {
          label: "1st menu item",
          key: "1",
        },
        {
          label: "2nd menu item",
          key: "2",
        },
        {
          label: "3rd menu item",
          key: "3",
        },
      ]}
    />
  );

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed} style={{ width: 100 }}>
        {/* 切换时候显示不同的图标,展开就是长图标, 收缩就是小图标 */}
        <div className="logo" style={{ display: "grid", placeItems: "center" }}>
          <img
            src={collapsed ? logo : logo2}
            alt="logo"
            style={!collapsed ? { height: 25, width: 124 } : { height: 25, width: 25 }}
          />
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={[
            {
              key: "1",
              icon: <UserOutlined />,
              label: "nav 1",
              children: [
                {
                  key: "1-1",
                  icon: <UserOutlined />,
                  label: "nav 1-1",
                },
                {
                  key: "1-2",
                  icon: <UserOutlined />,
                  label: "nav 1-2",
                },
              ],
            },
            {
              key: "2",
              icon: <VideoCameraOutlined />,
              label: "nav 2",
            },
            {
              key: "3",
              icon: <UploadOutlined />,
              label: "nav 3",
            },
          ]}
        />
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }}>
          <Row>
            <Col lg={{ span: 23 }} xs={{ span: 21 }}>
              {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                className: "trigger",
                onClick: onCollapse,
              })}
            </Col>
            <Col lg={{ span: 1 }} xs={{ span: 3 }}>
              <Space align="center">
                <Dropdown overlay={menu_user}>
                  <Avatar
                    // size="large"
                    icon={<UserOutlined />}
                    style={{ backgroundColor: "#f56a00" }}
                  />
                </Dropdown>
              </Space>
            </Col>
          </Row>
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
          }}
        >
          {elements}
        </Content>
        <Footer style={{ textAlign: "center", color: "rgb(0,0,0,0.3)", paddingTop: 0 }}>
          Fastlane ©2022 Created by Fastlane Digital Platform
        </Footer>
      </Layout>
    </Layout>
  );
};

export default Main;
