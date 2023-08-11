"use client";

import React, { useState } from "react";
import { Button, message, Steps, theme } from "antd";
import UserProfile from "./userProfile/UserProfile";
import BankDetails from "./bankDetails/BankDetails";
import AddressDetails from "./addressDetails/AddressDetails";
import NextOfKind from "./nextOfKind/NextOfKind";
import Client from "./client/Client";

const client = false;

let steps = [
  {
    title: "User Profile",
    content: <UserProfile />,
  },
  {
    title: "Bank Details",
    content: <BankDetails />,
  },
  {
    title: "Addresses (Billing)",
    content: <AddressDetails />,
  },
];

const steps2 = [
  {
    title: "Client Profile",
    content: <Client />,
  },
  {
    title: "Next Of Kind",
    content: <NextOfKind />,
  },
];

const App = () => {
  const { token } = theme.useToken();
  const [current, setCurrent] = useState(0);
  const [more, setMore] = useState(false);

  let stepz;

  if (more) {
    stepz = [...steps, ...steps2];
  } else {
    stepz = []
    stepz = steps;
  }

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  const items = stepz.map((item) => ({
    key: item.title,
    title: item.title,
  }));

  const contentStyle = {
    color: token.colorTextTertiary,
    backgroundColor: token.colorFillAlter,
    padding: "3rem 2rem",
    marginTop: "2rem",
  };

  return (
    <div className="pt-[15vh] md:px-12 px-2">
      <div className="text-center md:my-12 my-8">
        <h2 className="text-xl text-slate-700">Total Care Registration</h2>
      </div>
      <div>
        <p>Register as client</p>
        <input
          type="checkbox"
          name=""
          id=""
          onChange={() => {
            setMore((prev) => !prev);
          }}
        />
      </div>
      <div>
        <div style={{ padding: "0 2rem" }}>
          <Steps current={current} items={items} />
        </div>
        <div style={contentStyle}>{stepz[current].content}</div>
        <div
          style={{
            marginTop: 24,
            marginBottom: "3rem",
          }}
        >
          {current < stepz.length - 1 && (
            <Button
              type="primary"
              style={{ backgroundColor: "blue" }}
              onClick={() => next()}
            >
              Next
            </Button>
          )}
          {current === stepz.length - 1 && (
            <Button
              type="primary"
              onClick={() => message.success("Processing complete!")}
            >
              Done
            </Button>
          )}
          {current > 0 && (
            <Button
              style={{
                margin: "0 8px",
              }}
              onClick={() => prev()}
            >
              Previous
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};
export default App;
