
import { Inter } from '@next/font/google'
import DisplayingNavigatorArea from '../components/DisplayingNavigatorArea'
import Header from '../components/Header'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Header/>
      <div>
        <DisplayingNavigatorArea />
      </div>
    </>
  )
}
