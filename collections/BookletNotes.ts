import type { CollectionConfig } from 'payload'

export const BookletNotes: CollectionConfig = {
  slug: 'booklet-notes',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'relation', 'approved', 'createdAt'],
  },
  access: {
    read: ({ req }) => {
      if (req.user) return true
      return { approved: { equals: true } }
    },
    create: () => true,
    update: ({ req }) => Boolean(req.user),
    delete: ({ req }) => Boolean(req.user),
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'relation',
      type: 'text',
    },
    {
      name: 'message',
      type: 'textarea',
      required: true,
    },
    {
      name: 'approved',
      type: 'checkbox',
      defaultValue: true,
      admin: {
        description: 'Uncheck to hide a note from the public memorial booklet',
      },
    },
  ],
  timestamps: true,
}
