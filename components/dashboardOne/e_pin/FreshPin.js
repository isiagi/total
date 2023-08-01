import React from 'react';
import { Table } from 'antd';

const data = [
  {
    key: '1',
    srNo: '1',
    pinNo: 'PIN-123',
    amountUSD: 1000,
    createDate: '2023-07-30',
  },
  // Add more data as needed
];

const PinDetailsTable = () => {
  const columns = [
    {
      title: 'Sr. No',
      dataIndex: 'srNo',
      key: 'srNo',
    },
    {
      title: 'Pin No',
      dataIndex: 'pinNo',
      key: 'pinNo',
    },
    {
      title: 'Amount (USD)',
      dataIndex: 'amountUSD',
      key: 'amountUSD',
    },
    {
      title: 'Create Date',
      dataIndex: 'createDate',
      key: 'createDate',
    },
  ];

  return <Table columns={columns} dataSource={data} />;
};

export default PinDetailsTable;
