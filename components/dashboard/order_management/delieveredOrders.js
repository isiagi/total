
import TableComponent from "@/components/TableComponent";

const dataSource = [
  {
    key: '1',
    sNo: 1,
    purchaser: 'John Doe',
    username: 'john_doe',
    fullName: 'John Smith',
    amountUSD: 100,
    RSV: 50,
    invoice: 'INV001',
    date: '2023-07-19',
    deliveryType: 'Express',
    deliveryStatus: 'Delivered',
  },
  {
    key: '2',
    sNo: 2,
    purchaser: 'Jane Smith',
    username: 'jane_smith',
    fullName: 'Jane Johnson',
    amountUSD: 200,
    RSV: 75,
    invoice: 'INV002',
    date: '2023-07-20',
    deliveryType: 'Standard',
    deliveryStatus: 'Pending',
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
    title: 'Purchaser',
    dataIndex: 'purchaser',
    key: 'purchaser',
  },
  {
    title: 'Username',
    dataIndex: 'username',
    key: 'username',
  },
  {
    title: 'Full Name',
    dataIndex: 'fullName',
    key: 'fullName',
  },
  {
    title: 'Amount (USD)',
    dataIndex: 'amountUSD',
    key: 'amountUSD',
  },
  {
    title: 'RSV',
    dataIndex: 'RSV',
    key: 'RSV',
  },
  {
    title: 'Invoice',
    dataIndex: 'invoice',
    key: 'invoice',
  },
  {
    title: 'Date',
    dataIndex: 'date',
    key: 'date',
  },
  {
    title: 'Delivery Type',
    dataIndex: 'deliveryType',
    key: 'deliveryType',
  },
  {
    title: 'Delivery Status',
    dataIndex: 'deliveryStatus',
    key: 'deliveryStatus',
  },
  {
    title: 'View Invoice',
    dataIndex: 'viewInvoice',
    key: 'viewInvoice',
    render: () => <a>View</a>,
  },
];

const MyTable = () => {
  return <TableComponent dataSource={dataSource} columns={columns} />;
};

export default MyTable;
