import React from "react";
import { Table, Select } from "antd";
import Link from "next/link";

const { Option } = Select;

const handleLink = (record) => {
  return (
    <Link href={`/dashboard/?key=selectuser&action=${'edit'}&id=${record.key}`}>Edit</Link>
  )
}

const dataSource = [
  {
    key: "1",
    sNo: 1,
    userID: "USR001",
    username: "john_doe",
    fullName: "John Doe",
    position: "Manager",
    userType: "Admin",
    package: "Gold",
    sponsorID: "SPN123",
    phoneNo: "123-456-7890",
    registrationDate: "2023-07-19",
    activationDate: "2023-07-20",
    fundTransferStatus: "Completed",
    loginStatus: "Active",
  },
  {
    key: "2",
    sNo: 2,
    userID: "USR002",
    username: "jane_smith",
    fullName: "Jane Smith",
    position: "Supervisor",
    userType: "User",
    package: "Silver",
    sponsorID: "SPN456",
    phoneNo: "987-654-3210",
    registrationDate: "2023-07-20",
    activationDate: "2023-07-21",
    fundTransferStatus: "Pending",
    loginStatus: "Blocked",
  },
  {
    key: "3",
    sNo: 3,
    userID: "USR003",
    username: "mike_johnson",
    fullName: "Mike Johnson",
    position: "Associate",
    userType: "User",
    package: "Bronze",
    sponsorID: "SPN789",
    phoneNo: "555-123-4567",
    registrationDate: "2023-07-21",
    activationDate: "2023-07-22",
    fundTransferStatus: "Completed",
    loginStatus: "Active",
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
    title: "User ID",
    dataIndex: "userID",
    key: "userID",
  },
  {
    title: "Username",
    dataIndex: "username",
    key: "username",
  },
  {
    title: "Full Name",
    dataIndex: "fullName",
    key: "fullName",
  },
  {
    title: "Position",
    dataIndex: "position",
    key: "position",
  },
  {
    title: "User Type",
    dataIndex: "userType",
    key: "userType",
  },
  {
    title: "Package",
    dataIndex: "package",
    key: "package",
  },
  {
    title: "Sponsor ID",
    dataIndex: "sponsorID",
    key: "sponsorID",
  },
  {
    title: "Phone No",
    dataIndex: "phoneNo",
    key: "phoneNo",
  },
  {
    title: "Registration Date",
    dataIndex: "registrationDate",
    key: "registrationDate",
  },
  {
    title: "Activation Date",
    dataIndex: "activationDate",
    key: "activationDate",
  },
  {
    title: "Fund Transfer Status",
    dataIndex: "fundTransferStatus",
    key: "fundTransferStatus",
  },
  {
    title: "Login Status",
    dataIndex: "loginStatus",
    key: "loginStatus",
    render: (text, record) => (
      <Select
        defaultValue={text}
        onChange={(value) => handleLoginStatusChange(record.key, value)}
      >
        <Option value="Active">Active</Option>
        <Option value="Blocked">Blocked</Option>
      </Select>
    ),
  },
  {
    title: "Edit",
    dataIndex: "edit",
    key: "edit",
    render: (text, record) => handleLink(record),
  },
];

const handleLoginStatusChange = (recordKey, value) => {
  // Handle login status change here and update the data accordingly
  console.log(`Record Key: ${recordKey}, Login Status: ${value}`);
};

const MyTable = () => {
  return (
    <Table
      dataSource={dataSource}
      columns={columns}
      scroll={{
        x: 1500,
        y: 300,
      }}
     />
  );
};

export default MyTable;
