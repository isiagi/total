"use client"

import React, { useState } from 'react';
import { Divider, Radio, Table } from 'antd';

// rowSelection object indicates the need for row selection
const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  },
  getCheckboxProps: (record) => ({
    disabled: record.name === 'Disabled User',
    // Column configuration not to be checked
    name: record.name,
  }),
};
const App = ({tableHead, tableContent}) => {
  
  return (
    <div>
      
      <Table
        rowSelection={{
          type: "checkbox",
          ...rowSelection,
        }}
        columns={tableContent}
        dataSource={tableHead}
      />
    </div>
  );
};

export default App;