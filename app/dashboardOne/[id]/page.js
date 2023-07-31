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

import Dash from "@/components/dashboardOne/Dash";

import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import PackagePurchase from "@/components/dashboardOne/purchase/PackagePurchase";
import PackageHistory from "@/components/dashboardOne/purchase/PackageHistory";
import Wallet from "@/components/dashboardOne/incomeWallet/Wallet";
import WithdrawRequest from "@/components/dashboardOne/incomeWallet/WithdrawRequest";
import TransactionHistory from "@/components/dashboardOne/incomeWallet/TransactionHistory";
import Activationwallet from "@/components/dashboardOne/activation/ActivationWallet"
import AddFunds from "@/components/dashboardOne/activation/AddFunds";
import FundReport from "@/components/dashboardOne/activation/FundReport";
import FundTransfer from "@/components/dashboardOne/activation/FundTransfer";
import MyWallet from "@/components/dashboardOne/shoppingWallet/MyWallet";
import FreshPin from "@/components/dashboardOne/e_pin/FreshPin"
import UsedPin from "@/components/dashboardOne/e_pin/UsedPin"
import IdCard from "@/components/dashboardOne/my_project/IdCard";
import UpdateProfile from "@/components/dashboardOne/my_project/UpdateProfile";
import UpdateBankInfo from "@/components/dashboardOne/my_project/UpdateBankInfo";
import UpdateNominee from "@/components/dashboardOne/my_project/UpdateNominee";
import UpdatePassword from "@/components/dashboardOne/my_project/UpdatePassword";
 
const { SubMenu } = Menu;

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
  getItem("Dashboard", "dashboardOne", <PieChartOutlined />),
  // getItem("Option 2", "2", <DesktopOutlined />),
  getItem("Package Purchase", "sub1", <UserOutlined />, [
    getItem("Package Purchase", "userlist"),
    getItem("Package Purchase History", "packagepurchasereport"),
  ]),
  getItem("Product Order", "sub2", <TeamOutlined />, [
    getItem("Repurchase History", "managestockistproduct"),
  ]),
  getItem("Income Wallet", "sub3", <UserOutlined />, [
    getItem("Wallet Balance", "walletbalance"),
    getItem("Wallet Withdraw", "fundrequest"),
    getItem("My Widthdraw Request", "widthdrawrequest"),
    getItem("All Transactions History", "transactionhistory"),
  ]),
  getItem("Activation Wallet", "sub4", <UserOutlined />, [
    getItem("My Activation Wallet", "activationwallet"),
    getItem("Add Fund Request", "addfund"),
    getItem("Fund Request Report", "fundreport"),
    getItem("External Fund Transfer", "fundtransfer"),
  ]),
  getItem("Shopping Wallet", "sub5", <UserOutlined />, [
    getItem("My Wallet", "mywallet"),
  ]),
  getItem("E-Pin Section", "sub6", <UserOutlined />, [
    getItem("My Fresh Pin History", "freshpin"),
    getItem("My Used Pin History", "usedpin"),
  ]),
  getItem("My Profile", "sub17", <UserOutlined />, [
    getItem("ID Card", "id_card"),
    getItem("Update Profile", "update_profile"),
    getItem("Update Bank Info", "update_bank_info"),
    getItem("Update Nominee", "update_nominee"),
    getItem("Update Password", "update_password"),
  ]),
  getItem("My Network", "sub16", <UserOutlined />, [
    getItem("Direct Sponsor List", "rank"),
    getItem("Direct Level Information", "rank"),
    getItem("Downline Level Information", "rank"),
    getItem("Team Tree", "rank"),
    getItem("Unilevel", "rank"),
    getItem("New SV Report", "rank"),
  ]),
  getItem("Bonus Reports", "sub7", <UserOutlined />, [
    getItem("Personal Sale Bonus", "rank"),
    getItem("Level Bonus", "rank"),
    getItem("Matching Bonus", "rank"),
    getItem("Leadership Self Bonus", "rank"),
    getItem("Leader Bonus", "rank"),
  ]),
  getItem("My Rank", "sub8", <UserOutlined />),
  getItem("EShop Invoice", "sub9", <UserOutlined />),
  getItem("Offical Announcement", "sub9", <UserOutlined />),
  getItem("Referral Link", "sub15", <UserOutlined />, [
    getItem("Referral Link", "closing"),
  ]),
  getItem("Grievance/Request", "sub10", <UserOutlined />, [
    getItem("Open Ticket", "neworder"),
    getItem("View Response", "neworder"),
    getItem("Close Ticket", "neworder"),
  ]),
  getItem("Policy Secton", "sub14", <UserOutlined />, [
    getItem("Terms & Conditions", "neworder"),
  ]),
];

const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [select, setSelect] = useState("");

  const [selectedKey, setSelectedKey] = useState("dashboardOne");

  const router = useRouter();

  // const handleLinkClick = (url) => {
  //   setCurrentUrl(url);
  //   console.log("====================================");
  //   console.log("reloaded");
  //   console.log("====================================");
  // };

  const searchParams = useSearchParams();
  const key = searchParams.get("key");
  const getId = searchParams.get("id");
  const getAction = searchParams.get("action");

  useEffect(() => {
    // const key = pathname.substring(1); // Remove the leading slash from the pathname

    if (key && key !== "dashboardOne") {
      setSelectedKey(key);
      // setUrl(key);
    }
  }, [key]);

  const handleMenuClick = (key) => {
  
    setSelectedKey(key);
    // setUrl(key);
    router.push(`/dashboardOne/1/?key=${key}`, undefined, { shallow: true });
  };

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
            background: colorBgContainer,
            display: "flex",
            height: "90px",
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
            <p style={{ marginTop: "-30px" }}>
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
            
            {key === "dashboardOne" && <Dash />}
            {key === "userlist" && <PackagePurchase />}
            {key === "packagepurchasereport" && <PackageHistory />}
            {key === "walletbalance" && <Wallet />}
            {key === "widthdrawrequest" && <WithdrawRequest /> }
            {key === "transactionhistory" && <TransactionHistory />}
            {key === "activationwallet" && <Activationwallet /> }
            {key === "addfund" && <AddFunds /> }
            {key === "fundreport" && <FundReport /> }
            {key === "fundtransfer" && <FundTransfer /> }
            {key === "mywallet" && <MyWallet />}
            {key === "freshpin" && <FreshPin />}
            {key === "usedpin" && <UsedPin /> }
            {key === "id_card" && <IdCard />}
            {key === "update_profile" && <UpdateProfile />}
            {key === "update_bank_info" && <UpdateBankInfo />}
            {key === "update_nominee" && <UpdateNominee />}
            {key === "update_password" && <UpdatePassword />}
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};
export default App;
