//leadership  self income
const dataSource = [
    {
      key: '1',
      sNo: 1,
      recieverId: 'RCV001',
      recieverUsername: 'john_doe',
      recieverFullName: 'John Doe',
      recieverRank: 'Gold',
      totalSelfBusiness: '5000',
      commission: '200',
      date: '2023-07-19',
    },
    {
      key: '2',
      sNo: 2,
      recieverId: 'RCV002',
      recieverUsername: 'jane_smith',
      recieverFullName: 'Jane Smith',
      recieverRank: 'Silver',
      totalSelfBusiness: '3000',
      commission: '150',
      date: '2023-07-20',
    },
    {
      key: '3',
      sNo: 3,
      recieverId: 'RCV003',
      recieverUsername: 'mike_johnson',
      recieverFullName: 'Mike Johnson',
      recieverRank: 'Bronze',
      totalSelfBusiness: '8000',
      commission: '300',
      date: '2023-07-21',
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
      title: 'Reciever Id',
      dataIndex: 'recieverId',
      key: 'recieverId',
    },
    {
      title: 'Reciever Username',
      dataIndex: 'recieverUsername',
      key: 'recieverUsername',
    },
    {
      title: 'Reciever Full Name',
      dataIndex: 'recieverFullName',
      key: 'recieverFullName',
    },
    {
      title: 'Reciever Rank',
      dataIndex: 'recieverRank',
      key: 'recieverRank',
    },
    {
      title: 'Total Self Business (SV+RSV)',
      dataIndex: 'totalSelfBusiness',
      key: 'totalSelfBusiness',
    },
    {
      title: 'Commission (USD)',
      dataIndex: 'commission',
      key: 'commission',
    },
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
    },
  ];
  ///leadership income

  const dataSource1 = [
    {
      key: '1',
      sNo: 1,
      recieverId: 'RCV001',
      recieverUsername: 'john_doe',
      recieverFullName: 'John Doe',
      senderId: 'SND001',
      senderUsername: 'jane_smith',
      senderRank: 'Silver',
      recieverRank: 'Gold',
      totalBusiness: '10000',
      commission: '400',
      date: '2023-07-19',
    },
    {
      key: '2',
      sNo: 2,
      recieverId: 'RCV002',
      recieverUsername: 'jane_smith',
      recieverFullName: 'Jane Smith',
      senderId: 'SND002',
      senderUsername: 'john_doe',
      senderRank: 'Bronze',
      recieverRank: 'Silver',
      totalBusiness: '8000',
      commission: '300',
      date: '2023-07-20',
    },
    {
      key: '3',
      sNo: 3,
      recieverId: 'RCV003',
      recieverUsername: 'mike_johnson',
      recieverFullName: 'Mike Johnson',
      senderId: 'SND003',
      senderUsername: 'jane_smith',
      senderRank: 'Gold',
      recieverRank: 'Bronze',
      totalBusiness: '12000',
      commission: '500',
      date: '2023-07-21',
    },
    // Add more data objects as needed
  ];
  
  const columns1 = [
    {
      title: 'S.No',
      dataIndex: 'sNo',
      key: 'sNo',
    },
    {
      title: 'Receiver Id',
      dataIndex: 'recieverId',
      key: 'recieverId',
    },
    {
      title: 'Receiver Username',
      dataIndex: 'recieverUsername',
      key: 'recieverUsername',
    },
    {
      title: 'Receiver Full Name',
      dataIndex: 'recieverFullName',
      key: 'recieverFullName',
    },
    {
      title: 'Sender Id',
      dataIndex: 'senderId',
      key: 'senderId',
    },
    {
      title: 'Sender Username',
      dataIndex: 'senderUsername',
      key: 'senderUsername',
    },
    {
      title: 'Sender Rank',
      dataIndex: 'senderRank',
      key: 'senderRank',
    },
    {
      title: 'Receiver Rank',
      dataIndex: 'recieverRank',
      key: 'recieverRank',
    },
    {
      title: 'Total Business (SV+RSV)',
      dataIndex: 'totalBusiness',
      key: 'totalBusiness',
    },
    {
      title: 'Commission (USD)',
      dataIndex: 'commission',
      key: 'commission',
    },
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
    },
  ];

  ///membership package record
  const dataSource3 = [
    {
      key: '1',
      sNo: 1,
      userId: 'USR001',
      username: 'john_doe',
      memberName: 'John Doe',
      packageName: 'Silver Package',
      packageSV: '5000',
      purchaseDate: '2023-07-19',
      paymentMode: 'Credit Card',
    },
    {
      key: '2',
      sNo: 2,
      userId: 'USR002',
      username: 'jane_smith',
      memberName: 'Jane Smith',
      packageName: 'Gold Package',
      packageSV: '8000',
      purchaseDate: '2023-07-20',
      paymentMode: 'PayPal',
    },
    {
      key: '3',
      sNo: 3,
      userId: 'USR003',
      username: 'mike_johnson',
      memberName: 'Mike Johnson',
      packageName: 'Platinum Package',
      packageSV: '12000',
      purchaseDate: '2023-07-21',
      paymentMode: 'Bank Transfer',
    },
    // Add more data objects as needed
  ];
  
  const columns3 = [
    {
      title: 'S.No',
      dataIndex: 'sNo',
      key: 'sNo',
    },
    {
      title: 'User ID',
      dataIndex: 'userId',
      key: 'userId',
    },
    {
      title: 'Username',
      dataIndex: 'username',
      key: 'username',
    },
    {
      title: 'Member Name',
      dataIndex: 'memberName',
      key: 'memberName',
    },
    {
      title: 'Package Name',
      dataIndex: 'packageName',
      key: 'packageName',
    },
    {
      title: 'Package SV',
      dataIndex: 'packageSV',
      key: 'packageSV',
    },
    {
      title: 'Purchase Date',
      dataIndex: 'purchaseDate',
      key: 'purchaseDate',
    },
    {
      title: 'Payment Mode',
      dataIndex: 'paymentMode',
      key: 'paymentMode',
    },
    {
      title: 'View Invoice',
      dataIndex: 'viewInvoice',
      key: 'viewInvoice',
      render: () => <a>View</a>,
    },
  ];