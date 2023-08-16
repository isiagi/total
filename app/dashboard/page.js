"use client";

import React, { useContext, useEffect, useState } from "react";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Button, Layout, Menu, theme } from "antd";

import { items } from "./items.js";

// import { UserList, Manage } from "./dashboardComponents.js";

import { useRouter, useSearchParams } from "next/navigation";
import { AppContext } from "@/context/context";
// import EditUser from "@/components/dashboard/user_management/EditUser.js";
import Dashboard from "@/components/new_dashboard/dashboard/Dashboard.js";
import Product from "@/components/new_dashboard/product/Product.js";
import User from "@/components/new_dashboard/users/Users.js";
import AddStockist from "@/components/new_dashboard/stockist/AddStockist.js";
import GenerateLink from "@/components/new_dashboard/referral/GenerateLink.js";
import Image from "next/image";
import Order from "@/components/new_dashboard/product/Order.js";
// import TreeChart from "@/components/new_dashboard/tree/TreeChart.js";
// import BonusWallet from "@/components/new_dashboard/wallet/BonusWallet.js";
import ShoppingWallet from "@/components/new_dashboard/wallet/ShoppingWallet.js";
import TransferFunds from "@/components/new_dashboard/wallet/TransferFunds.js";

const { Header, Content, Sider } = Layout;

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

  const user = {
    id: 1,
    role: "admin",
  };

  useEffect(() => {
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
        style={{ background: colorBgContainer }}
      >
        {/* <div className="demo-logo-vertical" /> */}
        <div className="demo-logo-vertical" />
        <Menu
          defaultSelectedKeys={["dashboard"]}
          mode="inline"
          selectedKeys={[selectedKey]}
          onClick={({ key }) => {
            handleMenuClick(key);
          }}
        >
          {/* {user?.role === "admin" && item.key === "admin" && (
              <Menu.Item key={item.key} icon={item.icon}>
                {item.label}
              </Menu.Item>
            )} */}
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
            background: "#fff",
            display: "flex",
            height: "80px",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div className="flex">
            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              style={{
                fontSize: "16px",
                width: 64,
                height: 64,
                color: "#475569",
              }}
            />
            <div>
              <p>
                Welcome VITC_ADMIN into TOTAL CARE EUROPE UNIPESSOAL LDA Admin
                dashboard
              </p>
            </div>
          </div>
          <div className="flex items-center gap-5 md:mr-3">
            <h2>Geofrey Isiagi</h2>
            <Image
              src={
                "https://images.unsplash.com/photo-1543512214-318c7553f230?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
              }
              alt=""
              className="w-[50px] rounded-full object-cover h-[50px] bg-center"
              width={20}
              height={20}
            />
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
            {/* {key === "selectuser" && getAction === "edit" && <EditUser />} */}
            {/* {key === "managewallet" && getAction === "manage" && <Manage />} */}
            {/* {url === "userlist" && <UserList />} */}
            {selectedKey === "dashboard" && <Dashboard />}
            {selectedKey === "products" && <Product />}
            {selectedKey === "users" && <User />}

            {selectedKey === "add_stockist" && <AddStockist />}
            {selectedKey === "order" && <Order />}
            {/* {selectedKey === "my_network" && <TreeChart />}
            {selectedKey === "bonus_wallet" && <BonusWallet />}
            {selectedKey === "shopping_wallet" && <ShoppingWallet />}
            {selectedKey === "Transfer_funds" && <TransferFunds />} */}

            {key === "referral" && <GenerateLink />}
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};
export default App;
