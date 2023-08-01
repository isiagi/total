import React from 'react';
import { Table, Button } from 'antd';

const data = [
  {
    key: '1',
    sNo: 1,
    pageName: 'Home',
    lastUpdatedDate: '2023-07-23',
  },
  {
    key: '2',
    sNo: 2,
    pageName: 'About Us',
    lastUpdatedDate: '2023-07-24',
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
    title: 'Page Name',
    dataIndex: 'pageName',
    key: 'pageName',
  },
  {
    title: 'Last Updated Date',
    dataIndex: 'lastUpdatedDate',
    key: 'lastUpdatedDate',
  },
  {
    title: 'Edit',
    key: 'edit',
    render: (text, record) => (
      <Button type="primary" onClick={() => handleEdit(record.key)}>
        Edit
      </Button>
    ),
  },
  {
    title: 'Delete',
    key: 'delete',
    render: (text, record) => (
      <Button type="danger" onClick={() => handleDelete(record.key)}>
        Delete
      </Button>
    ),
  },
];

const MyTable = () => {
  const handleEdit = (key) => {
    // Handle edit action here
    console.log('Edit record with key:', key);
  };

  const handleDelete = (key) => {
    // Handle delete action here
    console.log('Delete record with key:', key);
  };

  return <Table dataSource={data} columns={columns} />;
};

export default MyTable;
