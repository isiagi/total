import React from 'react';
import TableComponent from "@/components/TableComponent";

const dataSource = [
  {
    key: '1',
    sNo: 1,
    userId: 'U001',
    username: 'john_doe',
    memberName: 'John Doe',
    packageName: 'Gold Package',
    packageSV: 500,
    purchaseDate: '2023-07-19',
    paymentMode: 'Credit Card',
  },
  {
    key: '2',
    sNo: 2,
    userId: 'U002',
    username: 'jane_smith',
    memberName: 'Jane Smith',
    packageName: 'Silver Package',
    packageSV: 300,
    purchaseDate: '2023-07-20',
    paymentMode: 'PayPal',
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
    title: 'Package Name',
    dataIndex: 'packageName',
    key: 'packageName',
  },
  {
    title: 'Package SV',
    dataIndex: 'packageSV',
    key: 'packageSV',
  },
  {
    title: 'Purchase Date',
    dataIndex: 'purchaseDate',
    key: 'purchaseDate',
  },
  {
    title: 'Payment Mode',
    dataIndex: 'paymentMode',
    key: 'paymentMode',
  },
  {
    title: 'View Invoice',
    dataIndex: 'viewInvoice',
    key: 'viewInvoice',
    render: () => <a>View</a>,
  },
];

const MyTable = () => {
  return <TableComponent dataSource={dataSource} columns={columns} />;
};

export default MyTable;
