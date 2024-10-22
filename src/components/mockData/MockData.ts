import { Account } from '@/utils/types';

export const mockAccounts: Account[] = [
  {
    account_id: 'ACC001',
    holder: {
      firstName: 'Mark & Hana Smith',
      lastName: '',
      mobileNumber: '489-178-0042',
      email: 'smithmark@Mhunlimited.com',
      jointNames: '',
      username: 'sample',
      password: 'sample'
    },
    bank_details: {
      account_type: 'Checking',
      balance_usd: 3800000.0
    },
    transaction_mgs_code: {
      transaction_text_msg: 'To continue this transaction, please enter the code sent to you',
      transaction_code: '237832',
      lastStepText: 'Your account is on hold. You cannot make transactions right now. Please contact our customer service team for assistance.',
      wireDate: true
    },
    transaction_history: [
      {
        transaction_id: '001',
        dateTime: 'November 23 2013',
        description: 'Wire Transfer from Hana Smith',
        status: 'Success',
        amount_usd: 200000.0,
        account_no: '****2323'
      },
      {
        transaction_id: '002',
        dateTime: 'March 23 2013',
        description: 'Check Deposit by Mark Smith',
        status: 'Success',
        amount_usd: 500000.0,
        account_no: '****4532'
      },
      {
        transaction_id: '003',
        dateTime: 'April 4 2011',
        description: 'Credit from MHunlimiteds USA',
        status: 'Success',
        amount_usd: 2500000.0,
        account_no: '****2319'
      },
      {
        transaction_id: '004',
        dateTime: 'February 20 2009',
        description: 'Credit from Hana Smith ',
        status: 'Success',
        amount_usd: 1000000.0,
        account_no: '****8491'
      },
      {
        transaction_id: '005',
        dateTime: 'February 2 2009',
        description: 'Credit from Mark Smith ',
        status: 'Success',
        amount_usd: 1000000.0,
        account_no: '****0933'
      }
    ]
  },
  {
    account_id: 'ACC002',
    holder: {
      firstName: 'Redemcion',
      lastName: 'Beltran',
      mobileNumber: '',
      email: 'r@gmail.com',
      jointNames: '',
      profileImg: '',
      username: 'Redemcion',
      password: 'Redmcciion1'
    },
    bank_details: {
      account_type: 'Checking',
      balance_usd: 2892200.0
    },
    transaction_mgs_code: {
      transaction_text_msg: 'To continue this transaction, please enter the code sent to you',
      transaction_code: '237832',
      lastStepText: 'Your account is on hold. You cannot make transactions right now. Please contact our customer service team for assistance.',
      wireDate: true
    },
    transaction_history: [
      {
        transaction_id: 'TXN001',
        dateTime: 'October 1 2024',
        description: 'Housing Payment',
        status: 'Success',
        amount_usd: 550000.0,
        account_no: '****5009'
      },
      {
        transaction_id: 'TXN002',
        dateTime: 'September 23 2024',
        description: 'Car Payment',
        status: 'Success',
        amount_usd: 120000.0,
        account_no: '****5009'
      },
      {
        transaction_id: 'TXN003',
        dateTime: 'September 10 2024',
        description: 'Antique Materials',
        status: 'Success',
        amount_usd: 85000.0,
        account_no: '****2930'
      },
      {
        transaction_id: 'TXN003',
        dateTime: 'August 18 2024',
        description: 'Land Payment',
        status: 'Success',
        amount_usd: 780000.0,
        account_no: '****2930'
      },
      {
        transaction_id: 'TXN004',
        dateTime: 'October 19 2023',
        description: 'Company Van Maintenance ',
        status: 'Success',
        amount_usd: -1500.0,
        account_no: '****2930'
      },
      {
        transaction_id: 'TXN005',
        dateTime: 'September 13 2022',
        description: 'Transfer from Nikky&co enterprises',
        status: 'Success',
        amount_usd: 4500.0,
        account_no: '****3839'
      },
      {
        transaction_id: 'TXN006',
        dateTime: 'June 24 2022',
        description: 'Appointment Form Payment',
        status: 'Success',
        amount_usd: 650.0,
        account_no: '****3249'
      },
      {
        transaction_id: 'TXN007',
        dateTime: 'February 3 2021',
        description: 'Department Workers',
        status: 'Success',
        amount_usd: -10000.0,
        account_no: '****1403'
      },
      {
        transaction_id: 'TXN008',
        dateTime: 'January 8 2021',
        description: 'Transfer from Chad Estate Management',
        status: 'Success',
        amount_usd: 7500.0,
        account_no: '****1403'
      },
      {
        transaction_id: 'TXN009',
        dateTime: 'May 20 2020',
        description: 'Bammy Work Wear and Maintenance',
        status: 'Success',
        amount_usd: -4500.0,
        account_no: '****5012'
      },
      {
        transaction_id: 'TXN010',
        dateTime: 'March 23 2020',
        description: 'Transfer from JayJay Group',
        status: 'Success',
        amount_usd: 12000.0,
        account_no: '****5013'
      }
    ]
  }
];
