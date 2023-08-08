import React from "react";
import { Table } from "antd";
import Image from "next/image";
import SearchComponent from "../searchComponent/SearchComponent";
const columns = [
  {
    title: "Product Image",
    dataIndex: "product",
    key: "product",
    render: (text) => (
      <div className="relative md:w-[180px] w-full h-[160px] rounded">
        <Image
          src={text}
          alt={text}
          className="block w-[100%] h-[100%] rounded object-cover"
          width={200}
          height={200}
        />
      </div>
    ),
  },
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Price",
    dataIndex: "price",
    key: "price",
  },
  {
    title: "Points",
    key: "points",
    dataIndex: "points",
  },
];
const data = [
  {
    key: "1",
    product:
      "https://images.unsplash.com/photo-1553456558-aff63285bdd1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    name: "Geofrey Isiagi",
    price: 500,
    points: 80,
  },
  {
    key: "2",
    product:
      "https://images.unsplash.com/photo-1543512214-318c7553f230?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    name: "Geofrey Isiagi",
    price: 25,
    points: 60,
  },
  {
    key: "3",
    product:
      "https://images.unsplash.com/photo-1543512214-318c7553f230?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    name: "Geofrey Isiagi",
    price: 150,
    points: 300,
  },
];

function Product() {
  return (
    <div>
      <div>
        <SearchComponent name="Products" show={true}/>
        <div>
          <div>
            <Table columns={columns} dataSource={data} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
