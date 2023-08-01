"use client"

import React, { useState } from 'react';
import { Table, Input, Button, Space } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

const data = [
  {
    key: '1',
    srNo: '1',
    senderId: 'S12345',
    fullName: 'John Doe',
    level: 'Silver',
    package: 'Basic Package',
    purchaseSV: 100,
    commissionUSD: 10,
    netAmountUSD: 90,
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
      title: 'Sender Id',
      dataIndex: 'senderId',
      key: 'senderId',
      sorter: (a, b) => a.senderId.localeCompare(b.senderId),
      ...getColumnSearchProps('senderId', 'Sender Id'),
    },
    {
      title: 'Full Name',
      dataIndex: 'fullName',
      key: 'fullName',
      sorter: (a, b) => a.fullName.localeCompare(b.fullName),
      ...getColumnSearchProps('fullName', 'Full Name'),
    },
    {
      title: 'Level',
      dataIndex: 'level',
      key: 'level',
      sorter: (a, b) => a.level.localeCompare(b.level),
      ...getColumnSearchProps('level', 'Level'),
    },
    {
      title: 'Package',
      dataIndex: 'package',
      key: 'package',
      sorter: (a, b) => a.package.localeCompare(b.package),
      ...getColumnSearchProps('package', 'Package'),
    },
    {
      title: 'Purchase SV',
      dataIndex: 'purchaseSV',
      key: 'purchaseSV',
      sorter: (a, b) => a.purchaseSV - b.purchaseSV,
      ...getColumnSearchProps('purchaseSV', 'Purchase SV'),
    },
    {
      title: 'Commission (USD)',
      dataIndex: 'commissionUSD',
      key: 'commissionUSD',
      sorter: (a, b) => a.commissionUSD - b.commissionUSD,
      ...getColumnSearchProps('commissionUSD', 'Commission (USD)'),
    },
    {
      title: 'Net Amount (USD)',
      dataIndex: 'netAmountUSD',
      key: 'netAmountUSD',
      sorter: (a, b) => a.netAmountUSD - b.netAmountUSD,
      ...getColumnSearchProps('netAmountUSD', 'Net Amount (USD)'),
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
