import { connect } from '@/boards/f9p'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  connect(body.path)
  console.log(body)
  return { body }
})
