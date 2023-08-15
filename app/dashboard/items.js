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
  LinkOutlined,
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
  getItem("Dashboard", "admin", <DashboardOutlined />),
  getItem("Package Purchase", "products", <BulbOutlined />, [
    getItem("order A Package", "order"),
    getItem("Previous Purchases", "products"),
  ]),
  getItem("My Wallets", "sub5", <WalletOutlined />, [
    getItem("Bonus Wallets", "bonus_wallet"),
    getItem("Shopping Wallet", "shopping_wallet"),
    getItem("Transfer Funds", "Transfer_funds"),
    // getItem("All Transaction History", "all_history"),
    // getItem("Add Funds", "add_funds"),
  ]),
  // getItem("Wallets", "users", <TeamOutlined />),
  getItem("My Profile", "sub3", <UserOutlined />),
  // getItem("Stockists", "sub4", <TeamOutlined />, [
  //   getItem("Manage Stockist", "wallet"),
  //   getItem("Add Stockist", "add_stockist"),
  // ]),
  // {
  //   label: "WALLETS",
  //   key: "sub17",
  //   type: "heading",
  // },

  // {
  //   label: "REPORTS",
  //   key: "sub90",
  //   type: "heading",
  // },
  getItem("My Networks", "my_network", <BookOutlined />),
  getItem("Reports", "sub6", <CreditCardOutlined />),
  getItem("My Rank", "sub7", <CreditCardOutlined />),
  getItem("EShop Invoice", "sub16", <FileDoneOutlined />),
  getItem("Announcements", "sub9", <SoundOutlined />),
  getItem("Referral Link", "referral", <LinkOutlined />),
  getItem("Help Desk", "referral", <LinkOutlined />, [
    getItem("View Ticket", "wallet_withdraw"),
    getItem("Create Ticket", "all_history"),
    getItem("Read Tickets", "add_funds"),
  ]),
  getItem("Policy Section", "referral", <LinkOutlined />),
  // ... rest of the items
];
