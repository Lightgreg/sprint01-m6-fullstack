import "reflect-metadata"
import 'express-async-errors'
import express from 'express' 
import userRoutes from "./routes/user.routes"
import handleError from "./errors/handleErrors"
import loginRoutes from "./routes/login.routes"
import contacteRoutes from "./routes/contactes.routes"



const app = express()
app.use(express.json())


app.use('/users', userRoutes)
app.use('/contacte', contacteRoutes)
app.use('/login', loginRoutes)


app.use(handleError)
export default app