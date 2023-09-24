import Link from 'next/link'
import Header from './components/Header'
import Card from './components/Card'
import LatestIssues from './components/LatestIssues'

export default function Home() {
  return (
    <main>
      <div className='m-4'>
        <div className='flex flex-col sm:flex-row'>
          <div className='p-4 flex gap-3'>
            {issueTrackers.map((item, index) => (
              <Card key={item?.title + '-' + index?.toString()} {...item} />
            ))}
          </div>
          <div className='p-4 '>
            <LatestIssues />
          </div>
        </div>
      </div>
    </main>
  )
}

const issueTrackers = [
  {
    title: 'Open Issues',
    content: '11',
  },
  {
    title: 'In-Progress Issues',
    content: '5',
  },
  {
    title: 'Closed Issues',
    content: '4',
  },
]
