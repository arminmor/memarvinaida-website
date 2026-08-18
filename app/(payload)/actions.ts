'use server'
import type { ServerFunctionClient } from 'payload'
import { handleServerFunctions } from '@payloadcms/next/layouts'
import configPromise from '@payload-config'
import { importMap } from './admin/importMap.js'

export const serverFunction: ServerFunctionClient = async (args) => {
  return handleServerFunctions({ ...args, config: configPromise, importMap })
}
