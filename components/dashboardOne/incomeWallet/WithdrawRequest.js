import React, { useState } from 'react';
import { Table, Input, Button, Space } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

const data = [
  {
    key: '1',
    transactionNo: 'TXN-123',
    requestedAmount: 1000,
    requestDate: '2023-07-29',
    adminResponse: 'Approved',
    responseDate: '2023-07-30',
    status: 'Completed',
  },
  // Add more data as needed
];

const SearchAndSortTransactionTable = () => {
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
      title: 'Transaction No',
      dataIndex: 'transactionNo',
      key: 'transactionNo',
      sorter: (a, b) => a.transactionNo.localeCompare(b.transactionNo),
      ...getColumnSearchProps('transactionNo', 'Transaction No'),
    },
    {
      title: 'Requested Amount(USD)',
      dataIndex: 'requestedAmount',
      key: 'requestedAmount',
      sorter: (a, b) => a.requestedAmount - b.requestedAmount,
      ...getColumnSearchProps('requestedAmount', 'Requested Amount(USD)'),
    },
    {
      title: 'Request Date',
      dataIndex: 'requestDate',
      key: 'requestDate',
      sorter: (a, b) => a.requestDate.localeCompare(b.requestDate),
      ...getColumnSearchProps('requestDate', 'Request Date'),
    },
    {
      title: 'Admin Response',
      dataIndex: 'adminResponse',
      key: 'adminResponse',
      sorter: (a, b) => a.adminResponse.localeCompare(b.adminResponse),
      ...getColumnSearchProps('adminResponse', 'Admin Response'),
    },
    {
      title: 'Response Date',
      dataIndex: 'responseDate',
      key: 'responseDate',
      sorter: (a, b) => a.responseDate.localeCompare(b.responseDate),
      ...getColumnSearchProps('responseDate', 'Response Date'),
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      sorter: (a, b) => a.status.localeCompare(b.status),
      ...getColumnSearchProps('status', 'Status'),
    },
  ];

  return <Table columns={columns} dataSource={data} />;
};

export default SearchAndSortTransactionTable;
