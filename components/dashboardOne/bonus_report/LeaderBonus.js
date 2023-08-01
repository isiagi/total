"use client"

import React, { useState } from 'react';
import { Table, Input, Button, Space } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

const data = [
  {
    key: '1',
    srNo: '1',
    senderId: 'S12345',
    senderUsername: 'sender123',
    senderFullName: 'John Doe',
    senderRank: 'Gold',
    yourRank: 'Silver',
    totalBusiness: 1000,
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
      title: 'Sender ID',
      dataIndex: 'senderId',
      key: 'senderId',
      sorter: (a, b) => a.senderId.localeCompare(b.senderId),
      ...getColumnSearchProps('senderId', 'Sender ID'),
    },
    {
      title: 'Sender Username',
      dataIndex: 'senderUsername',
      key: 'senderUsername',
      sorter: (a, b) => a.senderUsername.localeCompare(b.senderUsername),
      ...getColumnSearchProps('senderUsername', 'Sender Username'),
    },
    {
      title: 'Sender Full Name',
      dataIndex: 'senderFullName',
      key: 'senderFullName',
      sorter: (a, b) => a.senderFullName.localeCompare(b.senderFullName),
      ...getColumnSearchProps('senderFullName', 'Sender Full Name'),
    },
    {
      title: 'Sender Rank',
      dataIndex: 'senderRank',
      key: 'senderRank',
      sorter: (a, b) => a.senderRank.localeCompare(b.senderRank),
      ...getColumnSearchProps('senderRank', 'Sender Rank'),
    },
    {
      title: 'Your Rank',
      dataIndex: 'yourRank',
      key: 'yourRank',
      sorter: (a, b) => a.yourRank.localeCompare(b.yourRank),
      ...getColumnSearchProps('yourRank', 'Your Rank'),
    },
    {
      title: 'Total Business(SV+RSV)',
      dataIndex: 'totalBusiness',
      key: 'totalBusiness',
      sorter: (a, b) => a.totalBusiness - b.totalBusiness,
      ...getColumnSearchProps('totalBusiness', 'Total Business(SV+RSV)'),
    },
    {
      title: 'Commission (USD)',
      dataIndex: 'commissionUSD',
      key: 'commissionUSD',
      sorter: (a, b) => a.commissionUSD - b.commissionUSD,
      ...getColumnSearchProps('commissionUSD', 'Commission (USD)'),
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
