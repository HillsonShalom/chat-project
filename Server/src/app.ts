import env from 'dotenv'
import express from 'express'
import path from 'path'
import { connection } from './DAL'
import router from './routes'

env.config()
const port = process.env.PORT

connection()

const app = express();
app.use(express.static(path.join(__dirname, '../../Client/dist')))

app.use('/api', router)

app.listen(port || 5000, () => {
    console.log(`Listening at http://localhost:${port}/ ...`);
})