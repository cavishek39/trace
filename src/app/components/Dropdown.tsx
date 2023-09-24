'use client'
import React, { useState } from 'react'

type DropdownComponentProps = {
  onChangeStatus: (value: Status) => void
}

export type Status = 'Open' | 'Closed' | 'In Progress' | 'All Issues'

const STATUS: Status[] = ['Open', 'Closed', 'In Progress', 'All Issues']

const Dropdown = ({ onChangeStatus }: DropdownComponentProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedStatus, setSelectedStatus] = useState<Status>()

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className='relative'>
      <input
        readOnly
        onClick={toggleDropdown}
        value={selectedStatus}
        className='border border-gray-300 p-2 rounded-md'
        placeholder='Filter by Status'
      />
      {isOpen && (
        <div className='absolute mt-2 w-40 bg-white border border-gray-300 shadow-lg rounded'>
          {/* Dropdown Content */}
          <ul>
            {STATUS.sort().map((status) => (
              <li
                className='py-2 px-4 cursor-pointer hover:bg-gray-100'
                onClick={() => {
                  setSelectedStatus(status)
                  onChangeStatus(status)
                  setIsOpen(false)
                }}
                key={status}>
                {status}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default Dropdown
