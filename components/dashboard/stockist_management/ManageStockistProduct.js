import React, { useState } from 'react';
import { Table, Input, Button, Space } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

const dataSource = [
  {
    key: '1',
    sNo: 1,
    userID: 'USR001',
    username: 'john_doe',
    totalProductQuantity: 50,
    totalProductTypes: 10,
  },
  {
    key: '2',
    sNo: 2,
    userID: 'USR002',
    username: 'jane_smith',
    totalProductQuantity: 75,
    totalProductTypes: 15,
  },
  {
    key: '3',
    sNo: 3,
    userID: 'USR003',
    username: 'mike_johnson',
    totalProductQuantity: 30,
    totalProductTypes: 5,
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
    title: 'User ID',
    dataIndex: 'userID',
    key: 'userID',
  },
  {
    title: 'Username',
    dataIndex: 'username',
    key: 'username',
  },
  {
    title: 'Total Product Quantity',
    dataIndex: 'totalProductQuantity',
    key: 'totalProductQuantity',
    // Add a filter for totalProductQuantity
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
      <div style={{ padding: 8 }}>
        <Input
          placeholder="Search quantity"
          value={selectedKeys[0]}
          onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => confirm()}
          style={{ width: 188, marginBottom: 8, display: 'block' }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => confirm()}
            size="small"
            style={{ width: 90 }}
          >
            Search
          </Button>
          <Button onClick={() => clearFilters()} size="small" style={{ width: 90 }}>
            Reset
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />
    ),
    onFilter: (value, record) => record.totalProductQuantity.includes(value),
  },
  {
    title: 'Total Product Types',
    dataIndex: 'totalProductTypes',
    key: 'totalProductTypes',
    // Add a filter for totalProductTypes
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
      <div style={{ padding: 8 }}>
        <Input
          placeholder="Search product types"
          value={selectedKeys[0]}
          onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => confirm()}
          style={{ width: 188, marginBottom: 8, display: 'block' }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => confirm()}
            size="small"
            style={{ width: 90 }}
          >
            Search
          </Button>
          <Button onClick={() => clearFilters()} size="small" style={{ width: 90 }}>
            Reset
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />
    ),
    onFilter: (value, record) => record.totalProductTypes.includes(value),
  },
  {
    title: 'Action',
    dataIndex: 'action',
    key: 'action',
    render: () => <a>View List</a>,
  },
];

const MyTable = () => {
  const [filters, setFilters] = useState({});

  const handleTableChange = (pagination, filters) => {
    setFilters(filters);
  };

  return (
    <Table
      dataSource={dataSource}
      columns={columns}
      onChange={handleTableChange}
      pagination={false}
    />
  );
};

export default MyTable;
