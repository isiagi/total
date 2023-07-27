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



import { useEffect } from "react";

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
  getItem("Dashboard", "dashboard", <PieChartOutlined />, [`${<a href="/hhgyr" >hel</a>}`]),
  // getItem("Option 2", "2", <DesktopOutlined />),
  getItem("User Management", "sub1", <UserOutlined />, [
    getItem("User List", "userlist"),
    getItem("Password Tracker", "passwordtracker"),
    getItem("Update User Profile", "updateuserprofile"),
  ]),
  getItem("Stockist Management", "sub2", <TeamOutlined />, [
    getItem("Manage Stockist Product", "managestockistproduct"),
    getItem("Stockist Requested Product", "stockistrequestproduct"),
    getItem("Country Management", "countrymanagement"),
  ]),
  getItem("Stockist Fund Request Management", "sub3", <UserOutlined />, [
    getItem("Pending Fund Request", "fundrequest"),
    getItem("Approved Fund Request", "fundrequest"),
    getItem("Cancel Fund Request", "fundrequest"),
  ]),
  getItem("Stockist Wallet Management", "sub4", <UserOutlined />, [
    getItem("Manage Wallet", "wallet"),
  ]),
  getItem("E Pills Management", "sub5", <UserOutlined />, [
    getItem("Create E Pin", "12"),
    getItem("Fresh Pin Request", "13"),
    getItem("Used E Pin Report", "14"),
  ]),
  getItem("User Fund Request Management", "sub6", <UserOutlined />, []),
  getItem("Report Management", "sub17", <UserOutlined />, [
    getItem("Leadership Self Income", "leadershipincome"),
    getItem("Leadership Income", "leaderself"),
    getItem("Member Package Report", "memberself"),
  ]),
  getItem("Rank Achievers", "sub16", <UserOutlined />, [
    getItem("Rank Wise List", "rank"),
  ]),
  getItem("E Wallet Management", "sub7", <UserOutlined />, []),
  getItem("Settings Management", "sub8", <UserOutlined />, [
    getItem("Change Password", "19"),
    getItem("Change Profile Photo", "20"),
  ]),
  getItem("Witdrawal Management", "sub9", <UserOutlined />, []),
  getItem("Closing Management", "sub15", <UserOutlined />, [
    getItem("Leadership Monthly closing", "closing"),
  ]),
  getItem("Query Ticket Management", "sub10", <UserOutlined />, []),
  getItem("Order Management", "sub14", <UserOutlined />, [
    getItem("New Order List", "neworder"),
    getItem("Delievered Order List", "orderlist"),
  ]),
  getItem("Product Management", "sub11", <UserOutlined />, []),
  getItem("Admin Bank Management", "sub12", <UserOutlined />, []),
  getItem("Policy Content Management", "sub13", <UserOutlined />, [
    getItem("Change Password", "23"),
    getItem("Change Profile Photo", "24"),
    getItem("Policy Content Update", "25"),
  ]),
];

const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [select, setSelect] = useState("");

  const [currentUrl, setCurrentUrl] = useState("/dashboard");

  const handleLinkClick = (url) => {
    setCurrentUrl(url);
    console.log("====================================");
    console.log("reloaded");
    console.log("====================================");
  };

  useEffect(() => {
    window.history.pushState({}, null, currentUrl);

    // Get the updated URL using window.location
    const updatedUrl = window.location.pathname;
    window.scrollTo({ top: 0 });
    console.log("Updated URL:", updatedUrl);
  }, [currentUrl]);

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  let tableContent;
  let tableHead;

  if (select == true) {
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
        // overflow: "hidden",
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
          defaultSelectedKeys={["dashboard"]}
          mode="inline"
          items={items}
          onClick={({ key }) => {
            setSelect(key);
            handleLinkClick(key);
          }}
        />
        {/* <MenuComponent /> */}
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
            display: "flex",
            height: "90px"
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
          <div>
            <h2>Dashboard</h2>
            <p style={{marginTop: '-30px'}}>
              
              Welcome VITC_ADMIN into TOTAL CARE EUROPE UNIPESSOAL LDA Admin
              dashboard
            </p>
          </div>
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

          </div>
        </Content>
      </Layout>
    </Layout>
  );
};
export default App;
