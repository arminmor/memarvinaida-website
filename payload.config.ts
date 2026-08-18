import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { buildConfig } from 'payload'
import sharp from 'sharp'
import path from 'path'
import { fileURLToPath } from 'url'

import { Users } from './collections/Users.ts'
import { Media } from './collections/Media.ts'
import { BookletNotes } from './collections/BookletNotes.ts'
import { SiteContent } from './globals/SiteContent.ts'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
    meta: {
      titleSuffix: '— Arvin & Aida CMS',
    },
  },

  collections: [Users, Media, BookletNotes],

  globals: [SiteContent],

  editor: lexicalEditor({}),

  secret: process.env.PAYLOAD_SECRET || '',

  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },

  db: mongooseAdapter({
    url: process.env.DATABASE_URI || '',
  }),

  sharp,

  localization: {
    locales: [
      { code: 'en', label: 'English', rtl: false },
      { code: 'fa', label: 'فارسی', rtl: true },
    ],
    defaultLocale: 'en',
    fallback: true,
  },
})
