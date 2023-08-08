import React from "react";
import SearchComponent from "../searchComponent/SearchComponent";
import { Table } from "antd";

const columns = [
  {
    title: "FirstName",
    dataIndex: "firstname",
    key: "firstname",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "LastName",
    dataIndex: "lastname",
    key: "lastname",
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
  },
  {
    title: "Role",
    key: "role",
    dataIndex: "role",
  },
];
const data = [
  {
    key: "1",
    firstname: "Geofrey",
    lastname: "Isiagi",
    email: "isiagigeofrey0@gmail.com",
    role: "Authenticated",
  },
  {
    key: "2",
    firstname: "Herbert",
    lastname: "Kabagambe",
    email: "khabertzion11@gmail.com",
    role: "Authenticated",
  },
  {
    key: "3",
    firstname:
      "Geofrey",
    lastname: "Isiagi",
    email: "isiagigeofrey0@gmail.com",
    role: "Authenticated",
  },
];

function Users() {
  return (
    <div>
      <div>
        <SearchComponent name={"Registered Users"} show={true} />
        <div>
          <Table columns={columns} dataSource={data} />
        </div>
      </div>
    </div>
  );
}

export default Users;
