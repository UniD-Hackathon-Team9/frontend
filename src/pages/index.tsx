import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Header from '../components/layout/Header'
import MobileLayout from '../components/layout/MobileLayout'

export default function Home() {
  return (
    <div>
      <Header />
      <MobileLayout>
        <Link href={'test'}>
          <button className='btn-primary'>
            테스트 시작하기
          </button>
        </Link>
      </MobileLayout>
    </div>
  )
}
