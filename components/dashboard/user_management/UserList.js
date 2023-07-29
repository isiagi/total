import React from "react";
import { Table } from "antd";
import Link from "next/link";
import TableComponent from "@/components/TableComponent";

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
    password: "********",
    fullName: "John Doe",
    position: "Manager",
    userType: "Admin",
    package: "Gold",
    userRank: "Silver",
    sponsorID: "SPN123",
    phoneNo: "123-456-7890",
    registrationDate: "2023-07-19",
    activationDate: "2023-07-20",
  },
  {
    key: "2",
    sNo: 2,
    userID: "USR002",
    username: "jane_smith",
    password: "********",
    fullName: "Jane Smith",
    position: "Supervisor",
    userType: "User",
    package: "Silver",
    userRank: "Bronze",
    sponsorID: "SPN456",
    phoneNo: "987-654-3210",
    registrationDate: "2023-07-20",
    activationDate: "2023-07-21",
  },
  {
    key: "3",
    sNo: 3,
    userID: "USR003",
    username: "mike_johnson",
    password: "********",
    fullName: "Mike Johnson",
    position: "Associate",
    userType: "User",
    package: "Bronze",
    userRank: "Regular",
    sponsorID: "SPN789",
    phoneNo: "555-123-4567",
    registrationDate: "2023-07-21",
    activationDate: "2023-07-22",
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
    render: (text, record) => (
      // Use Link to create a link with the email as the URL parameter
      <Link href={`/dashboardOne/${record.sNo}`}>{text}</Link>
    ),
  },
  {
    title: "Username",
    dataIndex: "username",
    key: "username",
  },
  {
    title: "Password",
    dataIndex: "password",
    key: "password",
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
    title: "User Rank",
    dataIndex: "userRank",
    key: "userRank",
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
    title: "Edit",
    dataIndex: "edit",
    key: "edit",
    render: (text, record) => handleLink(record),
  },
  {
    title: "Action",
    dataIndex: "action",
    key: "action",
    render: () => <a>Delete</a>,
  },
];

const MyTable = () => {
  return (
    // <Table
    //   dataSource={dataSource}
    //   columns={columns}
    //   scroll={{
    //     x: 1500,
    //     y: 300,
    //   }}
    // />
    <TableComponent
      dataSource={dataSource}
      columns={columns}
      
    />
  );
};

export default MyTable;
