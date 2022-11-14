import { disconnect } from '@/boards/f9p'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  disconnect()
  return { body }
})
