"use client";

import React, { useContext, useLayoutEffect, useState } from "react";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Button, Layout, Menu, theme } from "antd";

import { items } from "./items.js";

import {
  UserList,
  PasswordTracker,
  UpdateUserProfile,
  ManageStockistProduct,
  StockistRequestProduct,
  CountryManagement,
  FundRequest,
  NewOrder,
  Delievered,
  Rank,
  LeadershipSelf,
  LeadershipIncome,
  Leadership,
  Wallet,
  Edit,
  CreatePin,
  Fresh,
  Used,
  Manage,
  ChangePassword,
  ChangeProfilePhoto,
  Policy
} from "./dashboardComponents.js";

import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { AppContext } from "@/context/context";
import EditUser from "@/components/dashboard/user_management/EditUser.js";

const { Header, Content, Footer, Sider } = Layout;

const { SubMenu } = Menu;

const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const { url, setUrl } = useContext(AppContext);
  const [selectedKey, setSelectedKey] = useState("dashboard");
  const [action, setAction] = useState("");

  const router = useRouter();

  // const handleLinkClick = (url) => {
  //   setCurrentUrl(url);
  //   console.log("====================================");
  //   console.log("reloaded");
  //   console.log("====================================");
  // };
  const handleMenuClick = (key, fx, id) => {
    setSelectedKey(key);
    setUrl(key);
    router.push(`/dashboard/?key=${key}`, undefined, { shallow: true });
  };

  const searchParams = useSearchParams();
  const key = searchParams.get("key");
  const getId = searchParams.get("id");
  const getAction = searchParams.get("action");

  console.log(getId, getAction);

  useLayoutEffect(() => {
    // const key = pathname.substring(1); // Remove the leading slash from the pathname

    if (key && key !== "dashboard") {
      setSelectedKey(key);
      setUrl(key);
    }
  }, [key, setUrl]);

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  console.log("===selectedKey===", selectedKey);

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
        // style={{ overflow: 'auto', height: '100vh', position: 'sticky', top: 0, left: 0, }}
      >
        {/* <div className="demo-logo-vertical" /> */}
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          defaultSelectedKeys={["dashboard"]}
          mode="inline"
          selectedKeys={[selectedKey]}
          onClick={({ key }) => {
            handleMenuClick(key);
          }}
        >
          {items.map((item) =>
            item.children ? (
              <SubMenu key={item.key} icon={item.icon} title={item.label}>
                {item.children.map((subItem) => (
                  <Menu.Item
                    key={subItem.key}
                    onClick={() => handleMenuClick(subItem.key)}
                  >
                    {subItem.label}
                  </Menu.Item>
                ))}
              </SubMenu>
            ) : (
              <Menu.Item
                key={item.key}
                icon={item.icon}
                onClick={() => handleMenuClick(item.key)}
              >
                {item.label}
              </Menu.Item>
            )
          )}
        </Menu>
        {/* <MenuComponent /> */}
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: "#6A6A6A",
            display: "flex",
            height: "80px",
            color: "#fff",
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
              color: "#fff"
            }}
          />
          <div>
            <h2>Dashboard</h2>
            <p style={{ marginTop: "-35px" }}>
              Welcome VITC_ADMIN into TOTAL CARE EUROPE UNIPESSOAL LDA Admin
              dashboard
            </p>
          </div>
        </Header>
        <Content
          style={{
            margin: "16px 16px",
            background: "#F1F5F9",
          }}
        >
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
            }}
          >
            {key === "selectuser" && getAction === "edit" && (<EditUser />)}
            {key === "managewallet" && getAction === "manage" && (<Manage />)}
            {url === "userlist" && <UserList />}
            {selectedKey === "passwordtracker" && <PasswordTracker />}
            {selectedKey === "updateuserprofile" && <UpdateUserProfile />}
            {selectedKey === "managestockistproduct" && (
              <ManageStockistProduct />
            )}
            
            {selectedKey === "stockistrequestproduct" && (
              <StockistRequestProduct />
            )}
            {key === "countrymanagementselect" && getAction === "edit" && (
              <Edit />
            )}
            {key === "countrymanagement" && <CountryManagement />}
            {selectedKey === "fundrequest" && <FundRequest />}
            {selectedKey === "neworder" && <NewOrder />}
            {selectedKey === "orderlist" && <Delievered />}
            {selectedKey === "rank" && <Rank />}
            {selectedKey === "leadershipincome" && <LeadershipIncome />}
            {selectedKey === "leaderself" && <LeadershipSelf />}
            {selectedKey === "memberself" && <Leadership />}
            {selectedKey === "wallet" && <Wallet />}
            {selectedKey === "createpin" && <CreatePin />}
            {selectedKey === "freshpin" && <Fresh />}
            {selectedKey === "usedpin" && <Used />}
            {selectedKey === "changepassword" && <ChangePassword />}
            {selectedKey === "changeprofilephoto" && <ChangeProfilePhoto />}
            {selectedKey === "policy" && <Policy />}
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};
export default App;
