import * as dotenv from 'dotenv'
import ApplicationRoute from './routes/application.routes'
import express from 'express'
import morgan from 'morgan'
import cors from 'cors'

const app = express();
dotenv.config()

app.use(morgan('dev'))
app.use(cors())

app.use('/app', ApplicationRoute)

app.listen(1234, () => {
    console.table({'report': 'this service is trying to get active', 'status': '🟢'})
})