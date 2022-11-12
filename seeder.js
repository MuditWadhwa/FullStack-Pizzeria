const mongoose=require('mongoose');
const dotenv=require('dotenv');
require('colors');
const Pizza=require('./models/pizzaModel');
const Pizzas=require('./data/pizza-data');
const connectDB = require('./config/config');
//const pizzaModel = require('./models/pizzaModel');
//const pizzaModel = require('./models/pizzaModel');

//config dot env and mongodb conn file
dotenv.config();
connectDB();

//import data
const importData=async()=>{
    try{
        await Pizza.deleteMany();
        const sampleData=Pizzas.map(pizza=>{return {...pizza}});
         await Pizza.insertMany(sampleData);
         console.log('Data Imported' .bgGreen.white);

    }catch(error){
       console.log(`${error}` .bgRed.white);
       process.exit(1);
    }

}
const dataDestroy=()=>{

}
    if(process.argv[2]==='-d')
      {
          dataDestroy();
      }
      else
      {
          importData();
      }
