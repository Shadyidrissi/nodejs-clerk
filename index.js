import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import {clerkClient} from '@clerk/express'

const app = express()
const port = 4000

dotenv.config();
app.use(cors())
app.use(express.json())

app.get('/', async(req, res) => {
    const {data} =await clerkClient.users.getUserList()
    console.log(data)
    res.send(data)
  })
  
  app.listen(process.env.PORT , () => {
    console.log(`Example app listening on port ${process.env.PORT || port}`)
  })