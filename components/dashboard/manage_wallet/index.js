import React from 'react';
import { Table, Button } from 'antd';
import TableComponent from "@/components/TableComponent";

const dataSource = [
  {
    key: '1',
    sNo: 1,
    userId: 'U001',
    username: 'john_doe',
    memberName: 'John Doe',
    balanceWallet: 500,
  },
  {
    key: '2',
    sNo: 2,
    userId: 'U002',
    username: 'jane_smith',
    memberName: 'Jane Smith',
    balanceWallet: 300,
  },
  // Add more data objects as needed
];

const columns = [
  {
    title: 'S.No',
    dataIndex: 'sNo',
    key: 'sNo',
  },
  {
    title: 'Userid',
    dataIndex: 'userId',
    key: 'userId',
  },
  {
    title: 'Username',
    dataIndex: 'username',
    key: 'username',
  },
  {
    title: 'Member Name',
    dataIndex: 'memberName',
    key: 'memberName',
  },
  {
    title: 'Balance Wallet',
    dataIndex: 'balanceWallet',
    key: 'balanceWallet',
  },
  {
    title: 'Manage Fund',
    dataIndex: 'manageFund',
    key: 'manageFund',
    render: () => <Button type="primary">Manage</Button>,
  },
];

const MyTable = () => {
  return <TableComponent dataSource={dataSource} columns={columns} />;
};

export default MyTable;
