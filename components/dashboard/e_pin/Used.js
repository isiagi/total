import React from 'react';
import { Table } from 'antd';

const data = [
    {
      key: '1',
      sNo: 1,
      pin: 'PIN123',
      amount: 100,
      receiverId: 'RECV001',
      receiverUsername: 'john_doe',
      status: 'Completed',
      createDate: '2023-07-23',
    },
    {
      key: '2',
      sNo: 2,
      pin: 'PIN456',
      amount: 200,
      receiverId: 'RECV002',
      receiverUsername: 'jane_smith',
      status: 'Pending',
      createDate: '2023-07-24',
    },
    // Add more data as needed
  ];
  
  const columns = [
    {
      title: 'S.No',
      dataIndex: 'sNo',
      key: 'sNo',
    },
    {
      title: 'Pin',
      dataIndex: 'pin',
      key: 'pin',
    },
    {
      title: 'Amount',
      dataIndex: 'amount',
      key: 'amount',
    },
    {
      title: 'Receiver ID',
      dataIndex: 'receiverId',
      key: 'receiverId',
    },
    {
      title: 'Receiver Username',
      dataIndex: 'receiverUsername',
      key: 'receiverUsername',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
    },
    {
      title: 'Create Date',
      dataIndex: 'createDate',
      key: 'createDate',
    },
  ];

const MyTable = () => {
  return <Table dataSource={data} columns={columns} />;
};

export default MyTable;
