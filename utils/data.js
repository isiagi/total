export const columns = [
  {
    title: "Name",
    dataIndex: "name",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Age",
    dataIndex: "age",
    sorter: (a, b) => a.name.length - b.name.length,
    sortDirections: ['descend'],
  },
  {
    title: "Address",
    dataIndex: "address",
  },
  {
    title: "Location",
    dataIndex: "location",
  },
  {
    title: "Email",
    dataIndex: "email",
  },
];

export const columns1 = [
  {
    title: "Name",
    dataIndex: "name",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Age",
    dataIndex: "age",
  },
  {
    title: "Address",
    dataIndex: "address",
  },
];

export const data = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
    location: "kampala",
    email: "email1@gmail.com",
  },
  {
    key: "2",
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
    location: "nairobi",
    email: "email2@gmail.com",
  },
  {
    key: "3",
    name: "Joe Black",
    age: 32,
    address: "Sydney No. 1 Lake Park",
    location: "Dodoma",
    email: "email3@gmail.com",
  },
  {
    key: "4",
    name: "Disabled User",
    age: 99,
    address: "Sydney No. 1 Lake Park",
    location: "Juba",
    email: "email4@gmail.com",
  },
  {
    key: "5",
    name: "Disabled User",
    age: 99,
    address: "Sydney No. 1 Lake Park",
    location: "Kigali",
    email: "email5@gmail.com",
  },
  {
    key: "6",
    name: "Disabled User",
    age: 99,
    address: "Sydney No. 1 Lake Park",
    location: "love",
    email: "email6@gmail.com",
  },
];

export const data1 = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
    location: "kampala",
    email: "email1@gmail.com",
  },
  {
    key: "2",
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
    location: "nairobi",
    email: "email2@gmail.com",
  },
  {
    key: "3",
    name: "Joe Black",
    age: 32,
    address: "Sydney No. 1 Lake Park",
    location: "Dodoma",
    email: "email3@gmail.com",
  },
  {
    key: "4",
    name: "Disabled User",
    age: 99,
    address: "Sydney No. 1 Lake Park",
    location: "Juba",
    email: "email4@gmail.com",
  },
];
