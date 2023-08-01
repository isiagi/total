"use client"

import React, { useState } from 'react';
import { Table, Input, Button, Space } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

const data = [
  {
    key: '1',
    srNo: '1',
    transactionNo: 'TXN-12345',
    userId: 'U123',
    username: 'user123',
    fullName: 'John Doe',
    matchingSV: 1000,
    commissionUSD: 100,
    date: '2023-07-30',
  },
  // Add more data as needed
];

const SearchAndSortTable = () => {
  const [searchText, setSearchText] = useState('');
  const [searchedColumn, setSearchedColumn] = useState('');

  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };

  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText('');
  };

  const getColumnSearchProps = (dataIndex, title) => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
      <div style={{ padding: 8 }}>
        <Input
          placeholder={`Search ${title}`}
          value={selectedKeys[0]}
          onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{ marginBottom: 8, display: 'block' }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90 }}
          >
            Search
          </Button>
          <Button onClick={() => handleReset(clearFilters)} size="small" style={{ width: 90 }}>
            Reset
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,
    onFilter: (value, record) =>
      record[dataIndex] ? record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()) : '',
    onFilterDropdownVisibleChange: (visible) => {
      if (visible) {
        setTimeout(() => document.getElementById(`${dataIndex}-search-input`).select(), 100);
      }
    },
    render: (text) =>
      searchedColumn === dataIndex ? (
        <span>
          {text}
        </span>
      ) : (
        text
      ),
  });

  const columns = [
    {
      title: 'Sr. No',
      dataIndex: 'srNo',
      key: 'srNo',
      sorter: (a, b) => a.srNo - b.srNo,
      ...getColumnSearchProps('srNo', 'Sr. No'),
    },
    {
      title: 'Transaction No',
      dataIndex: 'transactionNo',
      key: 'transactionNo',
      sorter: (a, b) => a.transactionNo.localeCompare(b.transactionNo),
      ...getColumnSearchProps('transactionNo', 'Transaction No'),
    },
    {
      title: 'User ID',
      dataIndex: 'userId',
      key: 'userId',
      sorter: (a, b) => a.userId.localeCompare(b.userId),
      ...getColumnSearchProps('userId', 'User ID'),
    },
    {
      title: 'Username',
      dataIndex: 'username',
      key: 'username',
      sorter: (a, b) => a.username.localeCompare(b.username),
      ...getColumnSearchProps('username', 'Username'),
    },
    {
      title: 'Full Name',
      dataIndex: 'fullName',
      key: 'fullName',
      sorter: (a, b) => a.fullName.localeCompare(b.fullName),
      ...getColumnSearchProps('fullName', 'Full Name'),
    },
    {
      title: 'Matching SV',
      dataIndex: 'matchingSV',
      key: 'matchingSV',
      sorter: (a, b) => a.matchingSV - b.matchingSV,
      ...getColumnSearchProps('matchingSV', 'Matching SV'),
    },
    {
      title: 'Commission (10%)(USD)',
      dataIndex: 'commissionUSD',
      key: 'commissionUSD',
      sorter: (a, b) => a.commissionUSD - b.commissionUSD,
      ...getColumnSearchProps('commissionUSD', 'Commission (10%)(USD)'),
    },
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
      sorter: (a, b) => a.date.localeCompare(b.date),
      ...getColumnSearchProps('date', 'Date'),
    },
  ];

  return <Table columns={columns} dataSource={data} />;
};

export default SearchAndSortTable;
