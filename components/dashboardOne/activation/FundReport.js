import React from 'react';
import { Table } from 'antd';

const data = [
  {
    key: '1',
    userId: 'U12345',
    amount: 1000,
    accountHolder: 'John Doe',
    bankName: 'ABC Bank',
    transactionNumber: 'TXN-123456',
    paymentProof: 'Link to Payment Proof',
    date: '2023-07-30',
    status: 'Completed',
  },
  // Add more data as needed
];

const SimpleTable = () => {
  const columns = [
    {
      title: 'User Id',
      dataIndex: 'userId',
      key: 'userId',
    },
    {
      title: 'Amount',
      dataIndex: 'amount',
      key: 'amount',
    },
    {
      title: 'Account Holder',
      dataIndex: 'accountHolder',
      key: 'accountHolder',
    },
    {
      title: 'Bank Name',
      dataIndex: 'bankName',
      key: 'bankName',
    },
    {
      title: 'Transaction Number',
      dataIndex: 'transactionNumber',
      key: 'transactionNumber',
    },
    {
      title: 'Payment Proof',
      dataIndex: 'paymentProof',
      key: 'paymentProof',
    },
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
    },
  ];

  return <Table columns={columns} dataSource={data} />;
};

export default SimpleTable;
