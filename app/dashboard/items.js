import {
    PieChartOutlined,
    TeamOutlined,
    UserOutlined,
  } from "@ant-design/icons";

function getItem(label, key, icon, children) {
    return {
      key,
      icon,
      children,
      label,
    };
  }

export const items = [
    getItem("Dashboard", "dashboard", <PieChartOutlined />, [
      `${(<a href="/hhgyr">hel</a>)}`,
    ]),
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
      getItem("Create E Pin", "createpin"),
      getItem("Fresh Pin Request", "freshpin"),
      getItem("Used E Pin Report", "usedpin"),
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
      getItem("Change Password", "changepassword"),
      getItem("Change Profile Photo", "changeprofilephoto"),
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
      getItem("Change Password", "changepassword"),
      getItem("Change Profile Photo", "changeprofilephoto"),
      getItem("Policy Content Update", "policy"),
    ]),
  ];