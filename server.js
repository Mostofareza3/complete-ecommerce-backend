import express from 'express';
import data from './data.js';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import seedRouter from './routes/seedRoutes.js';
import productRouter from './routes/productRoutes.js';
import userRouter from './routes/userRoutes.js';
import orderRouter from './routes/orderRoutes.js';



dotenv.config();

const app = express();

app.use(cors());
//form data in the post request will be converted to a JSON object in req.body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect(process.env.MONGODB_URI).then(() => {
    console.log('connected to db.')
}).catch((err) => console.log(err));


//Routes
app.use('/api/seed', seedRouter);
app.use('/api/products', productRouter);
app.use('/api/users', userRouter);
app.use('/api/orders', orderRouter);
app.get('/api/keys/paypal', (req, res) => {
    res.send(process.env.PAYPAL_CLIENT_ID || 'sb'); //sandbox
})

// default error Handler
app.use((err, req, res, next) => {
    res.status(500).send({ message: err.message });
})

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`server is running on ${port}`)
})
app.get("/", (req, res) => {
  res.send("hello world");
});
