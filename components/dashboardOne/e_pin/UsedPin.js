import React, { useState } from 'react';
import { Table, Input, Button, Space } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

const data = [
  {
    key: '1',
    srNo: '1',
    pinNo: 'PIN-123',
    amount: 1000,
    usedBy: 'John Doe',
    usedDate: '2023-07-30',
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
      ...getColumnSearchProps('srNo', 'Sr No'),
    },
    {
      title: 'Pin No',
      dataIndex: 'pinNo',
      key: 'pinNo',
      sorter: (a, b) => a.pinNo.localeCompare(b.pinNo),
      ...getColumnSearchProps('pinNo', 'Pin No'),
    },
    {
      title: 'Amount',
      dataIndex: 'amount',
      key: 'amount',
      sorter: (a, b) => a.amount - b.amount,
      ...getColumnSearchProps('amount', 'Amount'),
    },
    {
      title: 'Used By',
      dataIndex: 'usedBy',
      key: 'usedBy',
      sorter: (a, b) => a.usedBy.localeCompare(b.usedBy),
      ...getColumnSearchProps('usedBy', 'Used By'),
    },
    {
      title: 'Used Date',
      dataIndex: 'usedDate',
      key: 'usedDate',
      sorter: (a, b) => a.usedDate.localeCompare(b.usedDate),
      ...getColumnSearchProps('usedDate', 'Used Date'),
    },
  ];

  return <Table columns={columns} dataSource={data} />;
};

export default SearchAndSortTable;
