import React from 'react';
import { Table } from 'antd';
import Link from 'next/link'


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

const handleLink = (record) => {
  return (
    <Link href={`/dashboard/?key=countrymanagementselect&action=${'edit'}&id=${record.key}`}>Edit</Link>
  )
}

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
    render: (text, record) => handleLink(record),
  },
];

const MyTable = () => {
  return <Table dataSource={dataSource} columns={columns} />;
};

export default MyTable;
