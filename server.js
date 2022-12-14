const express=require('express');
const dotenv=require('dotenv');
const connectDB=require('./config/config');
require('colors');
const morgan=require('morgan');
const path=require('path');

//config dotenv 
dotenv.config();

//connection mongodb
connectDB();
const app=express();

//middlewares
app.use(express.json());
app.use(morgan('dev'));

//route 
app.use('/api/pizzas',require('./routes/pizzaRoute'));
app.use('/api/users',require('./routes/userRoutes'));
app.use('/api/orders',require('./routes/orderRoute'));

// if(process.env.NODE_ENV==='production')
// {
//   app.use(express.static(path.join(__dirname,'/client/build')))
//    app.get('*',(req,res)=>{
//        res.sendFile(path.resolve(__dirname,"client","build","index.html"),)
//    })
// }else
// {
//     app.get('/',(req,res)=>{
//         res.send("<h1>Hello from Node Server</h1>")
//     })
// }
app.use(express.static(path.join(__dirname, "./client/build")));

app.get("*", function (_, res) {
  res.sendFile(
    path.join(__dirname, "./client/build/index.html"),
    function (err) {
      res.status(500).send(err);
    }
  );
});

const port=process.env.PORT||8080;

app.listen(port,()=>{
    console.log(`Server Running on ${process.env.PORT}`.bgMagenta.white)
})