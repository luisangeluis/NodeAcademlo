const express = require('express');
//ACCEDER AL .env
// forma uno
// const dotenv =require('dotenv');
// const config = dotenv.config;
// config();
// forma dos
require('dotenv').config();
const port = process.env.PORT;
const app = express();

app.get('/', (req, res) => {
  res.json({
    nombre: 'luis',
    edad: 30,
    pais: 'mexico'
  })
})

app.post('/', (req, res) => {
  res.json(
    [
      { title: 'hola' },
      { title: 'hola' },
      { title: 'hola' },
      { title: 'hola' }
    ]
  )
})


app.listen(port, () => {
  console.log(`Server started from ${port}`);
})