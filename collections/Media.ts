import type { CollectionConfig } from 'payload'

export const Media: CollectionConfig = {
  slug: 'media',
  admin: {
    useAsTitle: 'alt',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true,
      localized: true,
    },
    {
      name: 'section',
      type: 'select',
      defaultValue: 'gallery',
      options: [
        { label: 'Hero', value: 'hero' },
        { label: "Arvin's photo", value: 'arvin' },
        { label: "Aida's photo", value: 'aida' },
        { label: 'Gallery', value: 'gallery' },
      ],
    },
    {
      name: 'focalPosition',
      type: 'text',
      defaultValue: '50% 50%',
      admin: {
        description: 'CSS object-position value, e.g. "50% 20%"',
      },
    },
    {
      name: 'gallerySortOrder',
      type: 'number',
      admin: {
        condition: (data) => data?.section === 'gallery',
        description: 'Lower numbers appear first in the gallery grid',
      },
    },
    {
      name: 'galleryColSpan',
      type: 'number',
      defaultValue: 1,
      admin: {
        condition: (data) => data?.section === 'gallery',
      },
    },
    {
      name: 'galleryRowSpan',
      type: 'number',
      defaultValue: 1,
      admin: {
        condition: (data) => data?.section === 'gallery',
      },
    },
  ],
  upload: {
    staticDir: 'media',
    imageSizes: [
      {
        name: 'thumbnail',
        width: 400,
        height: 300,
        position: 'centre',
      },
    ],
    mimeTypes: ['image/*'],
  },
}
