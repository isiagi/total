import React from 'react';
import { Button } from 'antd';
import TableComponent from "@/components/TableComponent";

const dataSource = [
  {
    key: '1',
    sNo: 1,
    purchaser: 'John Doe',
    fullName: 'John Smith',
    amountUSD: 100,
    RSV: 50,
    invoice: 'INV001',
    date: '2023-07-19',
    paymentType: 'Credit Card',
    purchaseType: 'Online',
    deliveryType: 'Express',
    address: '123 Main St, New York',
  },
  {
    key: '2',
    sNo: 2,
    purchaser: 'Jane Smith',
    fullName: 'Jane Johnson',
    amountUSD: 200,
    RSV: 75,
    invoice: 'INV002',
    date: '2023-07-20',
    paymentType: 'PayPal',
    purchaseType: 'In-store',
    deliveryType: 'Standard',
    address: '456 Park Ave, London',
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
    title: 'Purchaser',
    dataIndex: 'purchaser',
    key: 'purchaser',
  },
  {
    title: 'Full Name',
    dataIndex: 'fullName',
    key: 'fullName',
  },
  {
    title: 'Amount (USD)',
    dataIndex: 'amountUSD',
    key: 'amountUSD',
  },
  {
    title: 'RSV',
    dataIndex: 'RSV',
    key: 'RSV',
  },
  {
    title: 'Invoice',
    dataIndex: 'invoice',
    key: 'invoice',
  },
  {
    title: 'Date',
    dataIndex: 'date',
    key: 'date',
  },
  {
    title: 'Payment Type',
    dataIndex: 'paymentType',
    key: 'paymentType',
  },
  {
    title: 'Purchase Type',
    dataIndex: 'purchaseType',
    key: 'purchaseType',
  },
  {
    title: 'Delivery Type (User Choosed)',
    dataIndex: 'deliveryType',
    key: 'deliveryType',
  },
  {
    title: 'Address Manage',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'View Invoice',
    dataIndex: 'viewInvoice',
    key: 'viewInvoice',
    render: () => <a>View</a>,
  },
  {
    title: 'Action',
    dataIndex: 'action',
    key: 'action',
    render: () => <Button type="primary">Action</Button>,
  },
];

const MyTable = () => {
  return <TableComponent dataSource={dataSource} columns={columns} />;
};

export default MyTable;
