const express =require('express');
const app =express();
const config =require('./config.js');

app.use(express.json());
app.get('/',(req,res)=>{
  res.status(200).json({message:'Bienvenido a mi api de teams pokemon'})
})


app.listen(config.port,()=>{
  console.log(`PORT: ${config.port}`);
});




// const express = require('express');
// const config = require('./config');

// const app = express()

// app.use(express.json())

// app.get('/', (req, res) => {
//     res.status(200).json({message: 'Bienvenido a mi API de equipos pokemon'})
// })

// app.listen(config.port, () => {
//     console.log(`Server started at port ${config.port}`);
// })
