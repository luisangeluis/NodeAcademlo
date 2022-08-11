const express = require('express');

const app = express();

app.get('/hola',(req,res)=>{
  res.send('<h1>hola mundo</h1>');
})

app.listen(8000,()=>{
  console.log('Server started at port 8000');
});

