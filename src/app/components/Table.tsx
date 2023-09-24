import React from 'react'

type TableComponentProps = {
  tableData: {
    issue: string
    status: string
    createdAt: string
  }[]
}

const Table = ({ tableData }: TableComponentProps) => {
  return (
    <div className='container mx-auto'>
      <table className='min-w-full border-collapse border border-gray-300'>
        <thead className='bg-gray-100'>
          <tr>
            <th className='border border-gray-300 p-2'>Issue</th>
            <th className='border border-gray-300 p-2'>Status</th>
            <th className='border border-gray-300 p-2'>Created</th>
          </tr>
        </thead>
        <tbody>
          {tableData?.map((item, index) => (
            <tr key={item?.issue + 'issue-list' + index?.toString()}>
              <td className='border border-gray-300 p-2'>{item?.issue}</td>
              <td className='border border-gray-300 p-2 text-center'>
                {item?.status}
              </td>
              <td className='border border-gray-300 p-2 text-center'>
                {item?.createdAt}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Table
