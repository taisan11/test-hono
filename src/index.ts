import { Hono } from 'hono'

const app = new Hono()

app.get('/', async (c) => {
  const body = await c.req.parseBody()
  console.log("!!BODY!!")
  console.log(body)
  const method = c.req.method
  console.log("!!METHOD!!")
  console.log(method)
  const headers = c.req.header
  console.log("!!HEADERS!!")
  console.log(headers)
  const metadata = c.req.raw.headers
  console.log("!!生!!")
  console.log(metadata)
  console.log("!!END!!")
  return c.text('This site is Test Pages\nこのサイトはheaderなどで何が得られるのかをテストするためのページです')
})

app.get('/woker', async (c) => {
  const IP = c.req.header('CF-Connecting-IP')//IP Test on cloudflare
  const Country = c.req.header('CF-IPCountry')//IP Test on cloudflare
  return c.text(`Your IP is ${IP} and Your Country is ${Country}`)
})

export default app
