import type { NextPage } from 'next'
import dynamic from 'next/dynamic'

const Code = dynamic(() => import('../components/Code'), {
  ssr: false,
})

const Home: NextPage = () => {
  return (
    <>
      <Code />
    </>
  )
}

export default Home
