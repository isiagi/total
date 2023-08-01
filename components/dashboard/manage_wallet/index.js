import React from 'react';
import { Table, Button } from 'antd';
import TableComponent from "@/components/TableComponent";
import Link from 'next/link';

const handleLink = (record) => {
  return (
    <Link href={`/dashboard/?key=selectuser&action=${'edit'}&id=${record.key}`}>Edit</Link>
  )
}

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
    render: (text, record) => <Link href={`/dashboard/?key=managewallet&action=${'manage'}&id=${record.key}`}><Button className='bg-blue-500' type="primary">Manage</Button></Link>,
  },
];

const MyTable = () => {
  return <TableComponent dataSource={dataSource} columns={columns} />;
};

export default MyTable;
