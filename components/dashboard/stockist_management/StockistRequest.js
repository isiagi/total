import React, { useState } from 'react';
import { Table, Input, Button, Space } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

const dataSource = [
  {
    key: '1',
    sNo: 1,
    franchise: 'Franchise A',
    invoiceNo: 'INV001',
    totalAmount: 100,
    deliveryStatus: 'Delivered',
    delivery: 'Express',
    paymentProof: 'Paid',
    status: 'Active',
  },
  {
    key: '2',
    sNo: 2,
    franchise: 'Franchise B',
    invoiceNo: 'INV002',
    totalAmount: 150,
    deliveryStatus: 'Pending',
    delivery: 'Standard',
    paymentProof: 'Pending',
    status: 'Inactive',
  },
  {
    key: '3',
    sNo: 3,
    franchise: 'Franchise C',
    invoiceNo: 'INV003',
    totalAmount: 200,
    deliveryStatus: 'Delivered',
    delivery: 'Express',
    paymentProof: 'Paid',
    status: 'Active',
  },
  // Add more data objects as needed
];

const columns = [
  {
    title: 'S.No',
    dataIndex: 'sNo',
    key: 'sNo',
    sorter: (a, b) => a.sNo - b.sNo,
  },
  {
    title: 'Franchise',
    dataIndex: 'franchise',
    key: 'franchise',
    sorter: (a, b) => a.franchise.localeCompare(b.franchise),
  },
  {
    title: 'Invoice No.',
    dataIndex: 'invoiceNo',
    key: 'invoiceNo',
    sorter: (a, b) => a.invoiceNo.localeCompare(b.invoiceNo),
  },
  {
    title: 'Total Amount',
    dataIndex: 'totalAmount',
    key: 'totalAmount',
    sorter: (a, b) => a.totalAmount - b.totalAmount,
  },
  {
    title: 'Delivery Status',
    dataIndex: 'deliveryStatus',
    key: 'deliveryStatus',
    sorter: (a, b) => a.deliveryStatus.localeCompare(b.deliveryStatus),
  },
  {
    title: 'Delivery',
    dataIndex: 'delivery',
    key: 'delivery',
    sorter: (a, b) => a.delivery.localeCompare(b.delivery),
  },
  {
    title: 'Payment Proof',
    dataIndex: 'paymentProof',
    key: 'paymentProof',
    sorter: (a, b) => a.paymentProof.localeCompare(b.paymentProof),
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
    sorter: (a, b) => a.status.localeCompare(b.status),
  },
  {
    title: 'View Invoice',
    dataIndex: 'viewInvoice',
    key: 'viewInvoice',
    render: () => <a>View</a>,
  },
];

const MyTable = () => {
  const [searchText, setSearchText] = useState('');
  const [searchedColumn, setSearchedColumn] = useState('');

  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
      <div style={{ padding: 8 }}>
        <Input
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{ width: 188, marginBottom: 8, display: 'block' }}
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
    filterIcon: (filtered) => (
      <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />
    ),
    onFilter: (value, record) =>
      record[dataIndex] ? record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()) : '',
  });

  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };

  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText('');
  };

  const handleTableChange = (pagination, filters, sorter) => {
    // Handle table sorting here if needed
  };

  return (
    <Table
      dataSource={dataSource}
      columns={columns.map((col) => ({
        ...col,
        ...getColumnSearchProps(col.dataIndex),
      }))}
      onChange={handleTableChange}
      pagination={false}
    />
  );
};

export default MyTable;
