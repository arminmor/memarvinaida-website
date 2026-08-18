import { RootPage, generatePageMetadata } from '@payloadcms/next/views'
import { importMap } from '../importMap.js'
import configPromise from '@payload-config'

type Args = {
  params: Promise<{ segments: string[] }>
  searchParams: Promise<{ [key: string]: string | string[] }>
}

export default function Admin(args: Args) {
  return RootPage({ config: configPromise, importMap, ...args })
}

export async function generateMetadata(args: Args) {
  return generatePageMetadata({ config: configPromise, ...args })
}
