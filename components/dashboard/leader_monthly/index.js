import React from "react";
import TableComponent from "@/components/TableComponent";

const dataSource = [
  {
    key: "1",
    sNo: 1,
    date: "2023-07-19",
    leadershipSelfBonus: 100,
    leadershipBonus: 50,
    total: 150,
  },
  {
    key: "2",
    sNo: 2,
    date: "2023-07-20",
    leadershipSelfBonus: 200,
    leadershipBonus: 75,
    total: 275,
  },
  // Add more data objects as needed
];

const columns = [
  {
    title: "S.No",
    dataIndex: "sNo",
    key: "sNo",
  },
  {
    title: "Date",
    dataIndex: "date",
    key: "date",
  },
  {
    title: "Leadership Self Bonus",
    dataIndex: "leadershipSelfBonus",
    key: "leadershipSelfBonus",
  },
  {
    title: "Leadership Bonus",
    dataIndex: "leadershipBonus",
    key: "leadershipBonus",
  },
  {
    title: "Total",
    dataIndex: "total",
    key: "total",
  },
];

const MyTable = () => {
  return <TableComponent dataSource={dataSource} columns={columns} />;
};

export default MyTable;
