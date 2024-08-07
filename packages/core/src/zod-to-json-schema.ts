import type { z } from 'zod'
import { zodToJsonSchema as zodToJsonSchemaImpl } from 'zod-to-json-schema'

import type * as types from './types'
import { omit } from './utils'

/** Generate a JSON Schema from a Zod schema. */
export function zodToJsonSchema(schema: z.ZodType): types.JSONSchema {
  return omit(
    zodToJsonSchemaImpl(schema, { $refStrategy: 'none' }),
    '$schema',
    'default',
    'definitions',
    'description',
    'markdownDescription'
  )
}
