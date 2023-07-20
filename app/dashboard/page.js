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

import UserList from "@/components/dashboard/user_management/UserList";
import PasswordTracker from "@/components/dashboard/user_management/PasswordTracker";
import UpdateUserProfile from "@/components/dashboard/user_management/UpdateUserProfile";
import ManageStockistProduct from "@/components/dashboard/stockist_management/ManageStockistProduct";
import StockistRequestProduct from "@/components/dashboard/stockist_management/StockistRequest";
import CountryManagement from "@/components/dashboard/stockist_management/CountryManagement";
import FundRequest from "@/components/dashboard/fund_request/Table";

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
  getItem("Dashboard", "dashboard", <PieChartOutlined />),
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
    getItem("Manage Wallet", "11"),
  ]),
  getItem("E Pills Management", "sub5", <UserOutlined />, [
    getItem("Create E Pin", "12"),
    getItem("Fresh Pin Request", "13"),
    getItem("Used E Pin Report", "14"),
  ]),
  getItem("User Fund Request Management", "sub6", <UserOutlined />, []),
  getItem("Report Management", "sub17", <UserOutlined />, [
    getItem("Leadership Self Income", "15"),
    getItem("Leadership Income", "16"),
    getItem("Member Package Report", "17"),
  ]),
  getItem("Rank Achievers", "sub16", <UserOutlined />, [
    getItem("Rank Wise List", "18"),
  ]),
  getItem("E Wallet Management", "sub7", <UserOutlined />, []),
  getItem("Settings Management", "sub8", <UserOutlined />, [
    getItem("Change Password", "19"),
    getItem("Change Profile Photo", "20"),
  ]),
  getItem("Witdrawal Management", "sub9", <UserOutlined />, []),
  getItem("Closing Management", "sub15", <UserOutlined />, [
    getItem("Leadership Monthly closing", "21"),
  ]),
  getItem("Query Ticket Management", "sub10", <UserOutlined />, []),
  getItem("Order Management", "sub14", <UserOutlined />, [
    getItem("New Order List", "21"),
    getItem("Delievered Order List", "22"),
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
            {select === "userlist" && <UserList />}
            {select === "passwordtracker" && <PasswordTracker />}
            {select === "updateuserprofile" && <UpdateUserProfile />}
            {select === "managestockistproduct" && <ManageStockistProduct />}
            {select === "stockistrequestproduct" && <StockistRequestProduct />}
            {select === "countrymanagement" && <CountryManagement />}
            {select === "fundrequest" && <FundRequest />}
            {select && (
              <TableComponent
                tableContent={tableContent}
                tableHead={tableHead}
              />
            )}
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};
export default App;
