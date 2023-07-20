import React from 'react';
import { Table } from 'antd';

const dataSource = [
  {
    key: '1',
    sNo: 1,
    countryName: 'United States',
  },
  {
    key: '2',
    sNo: 2,
    countryName: 'United Kingdom',
  },
  {
    key: '3',
    sNo: 3,
    countryName: 'Canada',
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
    title: 'Country Name',
    dataIndex: 'countryName',
    key: 'countryName',
  },
  {
    title: 'Edit',
    dataIndex: 'edit',
    key: 'edit',
    render: () => <a>Edit</a>,
  },
];

const MyTable = () => {
  return <Table dataSource={dataSource} columns={columns} />;
};

export default MyTable;
