import * as dotenv from 'dotenv'
import express from 'express'
import morgan from 'morgan'
import cors from 'cors'

const app = express();
dotenv.config()

app.use(morgan('dev'))
app.use(cors())

app.listen(1234, () => {
    console.table({'report': 'this service is trying to get active', 'status': '🟢'})
})