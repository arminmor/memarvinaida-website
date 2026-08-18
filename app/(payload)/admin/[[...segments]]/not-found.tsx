import { NotFoundPage } from '@payloadcms/next/views'
import { importMap } from '../importMap.js'
import configPromise from '@payload-config'

type Args = {
  params: Promise<{ segments: string[] }>
  searchParams: Promise<{ [key: string]: string | string[] }>
}

export default async function NotFound({ params, searchParams }: Args) {
  return NotFoundPage({ config: configPromise, importMap, params, searchParams })
}
