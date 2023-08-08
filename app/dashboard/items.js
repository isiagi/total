import {
  DashboardOutlined,
  TeamOutlined,
  UserOutlined,
  SoundOutlined,
  BulbOutlined,
  WalletOutlined,
  BookOutlined,
  CreditCardOutlined,
  FileDoneOutlined,
  LinkOutlined
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
  getItem("Dashboard", "dashboard", <DashboardOutlined />),
  getItem("Products", "products", <BulbOutlined />),
  getItem("Users", "users", <TeamOutlined />),
  getItem("Client Profiles", "sub3", <UserOutlined />),
  getItem("Stockists", "sub4", <TeamOutlined />, [
    getItem("Manage Stockist", "wallet"),
    getItem("Add Stockist", "add_stockist"),
  ]),
  {
    label: "WALLETS",
    key: "sub17",
    type: "heading",
  },
  getItem("My Wallets", "sub5", <WalletOutlined />, [
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
  getItem("Bonus Reports", "sub5", <BookOutlined />, [
    getItem("Create E Pin", "createpin"),
    getItem("Fresh Pin Request", "freshpin"),
    getItem("Used E Pin Report", "usedpin"),
  ]),
  getItem("My Rank", "sub6", <CreditCardOutlined />),
  getItem("EShop Invoice", "sub16", <FileDoneOutlined />),
  getItem("Announcements", "sub7", <SoundOutlined />),
  getItem("Referral Link", "referral", <LinkOutlined />),
  // ... rest of the items
];
