import {
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
  SettingOutlined,
  FileOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

export const items = [
  {
    label: "MAIN",
    key: "grp",
    type: "heading",
  },
  getItem("Dashboard", "dashboard", <PieChartOutlined />),
  getItem("Products", "products", <UserOutlined />),
  getItem("Users", "sub2", <TeamOutlined />),
  getItem("Client Profiles", "sub3", <UserOutlined />),
  getItem("Stockists", "sub4", <UserOutlined />, [
    getItem("Manage Wallet", "wallet"),
  ]),
  {
    label: "WALLETS",
    key: "sub17",
    type: "heading",
  },
  getItem("My Wallets", "sub5", <UserOutlined />, [
    getItem("Bonus Wallets", "bonus_wallet"),
    getItem("Shopping Wallet", "shopping_wallet"),
    getItem("Wallet Withdraw", "wallet_withdraw"),
    getItem("All Transaction History", "all_history"),
    getItem("Add Funds", "add_funds"),
  ]),
  {
    label: "REPORTS",
    key: "sub90",
    type: "heading",
  },
  getItem("Bonus Reports", "sub5", <UserOutlined />, [
    getItem("Create E Pin", "createpin"),
    getItem("Fresh Pin Request", "freshpin"),
    getItem("Used E Pin Report", "usedpin"),
  ]),
  getItem("My Rank", "sub6", <UserOutlined />),
  getItem("EShop Invoice", "sub16", <UserOutlined />),
  getItem("Announcements", "sub7", <SettingOutlined />),
  getItem("Referral Link", "sub8", <UserOutlined />),
  // ... rest of the items
];
