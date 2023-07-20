import React from 'react';
import { Table } from 'antd';

const dataSource = [
  {
    key: '1',
    sNo: 1,
    stockistId: 'STK001',
    stockistMemberName: 'John Doe',
    amount: 500,
    accountHolder: 'John Doe',
    bankName: 'ABC Bank',
    transactionNumber: 'TXN001',
    date: '2023-07-19',
    paymentProof: 'Paid',
    status: 'Completed',
  },
  {
    key: '2',
    sNo: 2,
    stockistId: 'STK002',
    stockistMemberName: 'Jane Smith',
    amount: 300,
    accountHolder: 'Jane Smith',
    bankName: 'XYZ Bank',
    transactionNumber: 'TXN002',
    date: '2023-07-20',
    paymentProof: 'Pending',
    status: 'Pending',
  },
  {
    key: '3',
    sNo: 3,
    stockistId: 'STK003',
    stockistMemberName: 'Mike Johnson',
    amount: 800,
    accountHolder: 'Mike Johnson',
    bankName: 'PQR Bank',
    transactionNumber: 'TXN003',
    date: '2023-07-21',
    paymentProof: 'Paid',
    status: 'Completed',
  },
  // Add more data objects as needed
];

const columns = [
  {
    title: 'S.No',
    dataIndex: 'sNo',
    key: 'sNo',
    sorter: (a, b) => a.sNo - b.sNo,
  },
  {
    title: 'Stockist Id',
    dataIndex: 'stockistId',
    key: 'stockistId',
    sorter: (a, b) => a.stockistId.localeCompare(b.stockistId),
  },
  {
    title: 'Stockist Member Name',
    dataIndex: 'stockistMemberName',
    key: 'stockistMemberName',
    sorter: (a, b) => a.stockistMemberName.localeCompare(b.stockistMemberName),
  },
  {
    title: 'Amount',
    dataIndex: 'amount',
    key: 'amount',
    sorter: (a, b) => a.amount - b.amount,
  },
  {
    title: 'Account Holder',
    dataIndex: 'accountHolder',
    key: 'accountHolder',
    sorter: (a, b) => a.accountHolder.localeCompare(b.accountHolder),
  },
  {
    title: 'Bank Name',
    dataIndex: 'bankName',
    key: 'bankName',
    sorter: (a, b) => a.bankName.localeCompare(b.bankName),
  },
  {
    title: 'Transaction Number',
    dataIndex: 'transactionNumber',
    key: 'transactionNumber',
    sorter: (a, b) => a.transactionNumber.localeCompare(b.transactionNumber),
  },
  {
    title: 'Date',
    dataIndex: 'date',
    key: 'date',
    sorter: (a, b) => a.date.localeCompare(b.date),
  },
  {
    title: 'Payment Proof',
    dataIndex: 'paymentProof',
    key: 'paymentProof',
    sorter: (a, b) => a.paymentProof.localeCompare(b.paymentProof),
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
    sorter: (a, b) => a.status.localeCompare(b.status),
  },
];

const MyTable = () => {
  return <Table dataSource={dataSource} columns={columns} />;
};

export default MyTable;
