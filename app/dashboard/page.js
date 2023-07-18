"use client";

import React, { useState } from "react";
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from "@ant-design/icons";
import { Button, Layout, Menu, theme } from "antd";
import TableComponent from "@/components/Table";
import { columns, data, columns1, data1 } from "@/utils/data";

const { Header, Content, Footer, Sider } = Layout;

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const items = [
  getItem("Option 1", "1", <PieChartOutlined />),
  getItem("Option 2", "2", <DesktopOutlined />),
  getItem("User", "sub1", <UserOutlined />, [
    getItem("Tom", "3"),
    getItem("Bill", "4"),
    getItem("Alex", "5"),
  ]),
  getItem("Team", "sub2", <TeamOutlined />, [
    getItem("Team 1", "6"),
    getItem("Team 2", "8"),
  ]),
  getItem("Files", "9", <FileOutlined />),
];
const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [select, setSelect] = useState(1);

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  let tableContent;
  let tableHead;

  if (select == 1) {
    tableContent = columns;
    tableHead = data;
  } else {
    tableContent = columns1;
    tableHead = data1;
  }

  return (
    <Layout
      style={{
        minHeight: "100vh",
        paddingTop: "14vh",
        overflow: "hidden",
      }}
    >
      <Sider
        trigger={null}
        breakpoint="md"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          setCollapsed(collapsed);
          console.log(collapsed, type);
        }}
        collapsible
        collapsed={collapsed}
     
      >
        {/* <div className="demo-logo-vertical" /> */}
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={items}
          onClick={({ key }) => {
            setSelect(key);
          }}
        />
        {/* <MenuComponent /> */}
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          style={{
            margin: "0 16px",
          }}
        >
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
            }}
          >
            <TableComponent tableContent={tableContent} tableHead={tableHead} />
          </div>
        </Content>
      
      </Layout>
    </Layout>
  );
};
export default App;
