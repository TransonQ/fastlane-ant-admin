import "./Main.less";

import { Avatar, Col, Dropdown, Layout, Menu, Popover, Row, Space, message } from "antd";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { useLocation, useNavigate, useRoutes } from "react-router-dom";

import React from "react";
import logo from "@/assets/fastlane.png";
import logo2 from "@/assets/logo2.png";
import { routes } from "@/configs/routes";
import { useToggle } from "ahooks";

const { Header, Content, Footer, Sider } = Layout;

const Main = () => {
  const elements = useRoutes(routes);
  const location = useLocation();
  const navigate = useNavigate();

  // ahooks
  const [collapsed, { toggle: onCollapse }] = useToggle();

  const menu_left = [
    {
      key: "/", // 路由字符串
      icon: <VideoCameraOutlined />,
      label: "nav 2",
      onClick() {
        navigate(`/`);
      },
    },
    {
      key: "2-menu",
      icon: <UserOutlined />,
      label: "nav 1",
      children: [
        {
          key: "/child", // 路由字符串
          icon: <UserOutlined />,
          label: "nav 1-1",
          onClick() {
            navigate(`/child`);
          },
        },
        {
          key: "1-2",
          icon: <UserOutlined />,
          label: "nav 1-2",
        },
      ],
    },
    {
      key: "3",
      icon: <UploadOutlined />,
      label: "nav 3",
    },
  ];
  // user
  const onClick1 = ({ key }) => {
    message.info(`Click on item ${key}`);
  };

  const menu_user = (
    <Menu
      items={[
        {
          label: "1st menu item",
          key: "1",
          onClick: onClick1,
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
          defaultSelectedKeys={["1"]} // 默认选中
          defaultOpenKeys={["2-menu"]} // 默认展开
          items={menu_left}
          selectedKeys={[location.pathname]} // 关联路由
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
