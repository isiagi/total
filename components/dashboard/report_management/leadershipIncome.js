import React from 'react';
import TableComponent from "@/components/TableComponent";

const dataSource = [
  {
    key: '1',
    sNo: 1,
    receiverId: 'R001',
    receiverUsername: 'john_doe',
    receiverFullName: 'John Doe',
    receiverRank: 'Gold',
    totalSelfBusiness: 5000,
    commissionUSD: 200,
    date: '2023-07-19',
  },
  {
    key: '2',
    sNo: 2,
    receiverId: 'R002',
    receiverUsername: 'jane_smith',
    receiverFullName: 'Jane Smith',
    receiverRank: 'Diamond',
    totalSelfBusiness: 10000,
    commissionUSD: 500,
    date: '2023-07-20',
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
    title: 'Receiver Id',
    dataIndex: 'receiverId',
    key: 'receiverId',
  },
  {
    title: 'Receiver Username',
    dataIndex: 'receiverUsername',
    key: 'receiverUsername',
  },
  {
    title: 'Receiver Full Name',
    dataIndex: 'receiverFullName',
    key: 'receiverFullName',
  },
  {
    title: 'Receiver Rank',
    dataIndex: 'receiverRank',
    key: 'receiverRank',
  },
  {
    title: 'Total Self Business(SV+RSV)',
    dataIndex: 'totalSelfBusiness',
    key: 'totalSelfBusiness',
  },
  {
    title: 'Commission(USD)',
    dataIndex: 'commissionUSD',
    key: 'commissionUSD',
  },
  {
    title: 'Date',
    dataIndex: 'date',
    key: 'date',
  },
];

const MyTable = () => {
  return <TableComponent dataSource={dataSource} columns={columns} />;
};

export default MyTable;
