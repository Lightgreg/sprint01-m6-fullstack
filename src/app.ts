import "reflect-metadata"
import 'express-async-errors'
import express from 'express' 
import userRoutes from "./routes/user.routes"
import handleError from "./errors/handleErrors"



const app = express()
app.use(express.json())


app.use('/users', userRoutes)


app.use(handleError)
export default app