import {createClient} from 'next-sanity'

export const client = createClient({
  apiVersion: '2023-12-29',
  projectId: 'qw8dz92q',
  dataset: 'production',
  useCdn: false,
})
