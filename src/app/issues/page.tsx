'use client'

import React, { useState } from 'react'
import Table from '../components/Table'
import Dropdown, { Status } from '../components/Dropdown'

const Issues = () => {
  const [selectedStatus, setSelectedStatus] = useState<Status>()

  function getTableData() {
    if (!selectedStatus || selectedStatus === 'All Issues') {
      return DUMMY_TABLE_DATA?.tableData
    } else {
      return DUMMY_TABLE_DATA.tableData?.filter(
        (data) => data.status === selectedStatus
      )
    }
  }

  const tableData = getTableData()

  return (
    <div className='p-4'>
      <div className='py-4 px-6'>
        <Dropdown onChangeStatus={(status) => setSelectedStatus(status)} />
      </div>
      <Table tableData={tableData} />
    </div>
  )
}

export default Issues

const DUMMY_TABLE_DATA = {
  tableData: [
    {
      issue: 'Issue 1',
      status: 'Open',
      createdAt: '2023-09-01',
    },
    {
      issue: 'Issue 2',
      status: 'In Progress',
      createdAt: '2023-09-05',
    },
    {
      issue: 'Issue 3',
      status: 'Closed',
      createdAt: '2023-09-10',
    },
    {
      issue: 'Issue 4',
      status: 'Open',
      createdAt: '2023-09-15',
    },
    {
      issue: 'Issue 5',
      status: 'In Progress',
      createdAt: '2023-09-20',
    },
  ],
}
