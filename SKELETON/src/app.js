//Dependencies
const express =require('express');
const app =express();
//Archivos de rutas
const usersRouter = require('./users/users.routes').router

//para que el body de la peticion no salga undefined
app.use(express.json());

app.get('/',(req,res)=>{
  res.status(200).json({message:'status ok'})
})

app.use('/api/v1/users',usersRouter);

app.listen(3000,()=>{
  console.log('server started at port:3000');
});