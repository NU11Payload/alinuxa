import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'Alinuxa',

  projectId: 'g7kzs6yy',
  dataset: 'wev',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
