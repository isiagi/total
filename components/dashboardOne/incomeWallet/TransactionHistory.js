import React, { useState } from 'react';
import { Table, Input, Button, Space } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

const data = [
  {
    key: '1',
    srNo: '1',
    transactionNo: 'TXN-123',
    senderUsername: 'JohnDoe',
    senderID: '12345',
    credit: 1000,
    debit: 0,
    remark: 'Payment received',
    date: '2023-07-30',
  },
  // Add more data as needed
];

const SearchAndSortTransactionDetailsTable = () => {
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
      title: 'Sender Username',
      dataIndex: 'senderUsername',
      key: 'senderUsername',
      sorter: (a, b) => a.senderUsername.localeCompare(b.senderUsername),
      ...getColumnSearchProps('senderUsername', 'Sender Username'),
    },
    {
      title: 'Sender ID',
      dataIndex: 'senderID',
      key: 'senderID',
      sorter: (a, b) => a.senderID.localeCompare(b.senderID),
      ...getColumnSearchProps('senderID', 'Sender ID'),
    },
    {
      title: 'Credit',
      dataIndex: 'credit',
      key: 'credit',
      sorter: (a, b) => a.credit - b.credit,
      ...getColumnSearchProps('credit', 'Credit'),
    },
    {
      title: 'Debit',
      dataIndex: 'debit',
      key: 'debit',
      sorter: (a, b) => a.debit - b.debit,
      ...getColumnSearchProps('debit', 'Debit'),
    },
    {
      title: 'Remark',
      dataIndex: 'remark',
      key: 'remark',
      sorter: (a, b) => a.remark.localeCompare(b.remark),
      ...getColumnSearchProps('remark', 'Remark'),
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

export default SearchAndSortTransactionDetailsTable;
