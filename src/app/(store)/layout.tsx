import { Header } from '@/components/header'
import { Metadata } from 'next'
import { PropsWithChildren } from 'react'

export const metadata: Metadata = {
  title: {
    template: '%s | devstore',
    default: 'home',
  },
}

export default function StoreLayout({ children }: PropsWithChildren) {
  return (
    <div className="mx-auto grid min-h-screen w-full max-w-[1600px] grid-rows-app gap-5 p-8">
      <Header />
      {children}
    </div>
  )
}
