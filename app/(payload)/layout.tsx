import type { ReactNode } from 'react'
import { RootLayout } from '@payloadcms/next/layouts'
import { importMap } from './admin/importMap.js'
import { serverFunction } from './actions'
import configPromise from '@payload-config'

import '@payloadcms/next/css'

type Args = {
  children: ReactNode
}

export default function Layout({ children }: Args) {
  return (
    <RootLayout config={configPromise} importMap={importMap} serverFunction={serverFunction}>
      {children}
    </RootLayout>
  )
}
