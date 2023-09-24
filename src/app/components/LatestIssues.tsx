import React from 'react'

type LatestIssueComponentProps = {
  issueDescription: string
  tag: string
  assignee: string
}

const LatestIssues = () => {
  return (
    <div className='bg-white p-4 shadow-md rounded-lg overflow-hidden  justify-center items-center'>
      <div className='mb-6'>
        <h1 className='font-bold'>Latest Issues</h1>
      </div>
      {[1, 2, 3, 4].map((item, index) => (
        <>
          <div className='flex'>
            <div>
              <h3>Database Connection Error</h3>
              <div className='flex'>
                <p className='bg-red-300 text-center rounded-md p-1 text-red-600'>
                  Open
                </p>
              </div>
            </div>
            <div className='ml-16'>
              <h1>Avishek</h1>
            </div>
          </div>
          <div className='w-full h-0.5 bg-slate-300 my-3' />
        </>
      ))}
    </div>
  )
}

export default LatestIssues
