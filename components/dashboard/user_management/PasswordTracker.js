import React from "react";
import { Table } from "antd";

const dataSource = [
  {
    key: "1",
    sNo: 1,
    userID: "USR001",
    fullName: "John Doe",
    password: "********",
  },
  {
    key: "2",
    sNo: 2,
    userID: "USR002",
    fullName: "Jane Smith",
    password: "********",
  },
  {
    key: "3",
    sNo: 3,
    userID: "USR003",
    fullName: "Mike Johnson",
    password: "********",
  },
  // Add more data objects as needed
];

const columns = [
  {
    title: "S.No",
    dataIndex: "sNo",
    key: "sNo",
  },
  {
    title: "UserID",
    dataIndex: "userID",
    key: "userID",
  },
  {
    title: "Full Name",
    dataIndex: "fullName",
    key: "fullName",
  },
  {
    title: "Password",
    dataIndex: "password",
    key: "password",
  },
];

const MyTable = () => {
  return <Table dataSource={dataSource} columns={columns} />;
};

export default MyTable;
